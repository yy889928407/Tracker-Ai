"""
AI Activity Tracker - Backend Server
Handles data persistence, notifications, and AI analysis
"""

from flask import Flask, request, jsonify
from flask_cors import CORS
from datetime import datetime
import json
import os
from pathlib import Path

app = Flask(__name__)
CORS(app)

# Data storage
DATA_FILE = 'activities_data.json'

def load_data():
    """Load activities from JSON file"""
    if os.path.exists(DATA_FILE):
        with open(DATA_FILE, 'r') as f:
            return json.load(f)
    return {}

def save_data(data):
    """Save activities to JSON file"""
    with open(DATA_FILE, 'w') as f:
        json.dump(data, f, indent=2)

@app.route('/api/activities', methods=['GET'])
def get_activities():
    """Get activities for a specific date"""
    date = request.args.get('date')
    data = load_data()
    return jsonify(data.get(date, []))

@app.route('/api/activities', methods=['POST'])
def add_activity():
    """Add a new activity"""
    data = load_data()
    date = request.json.get('date')
    activity = request.json.get('activity')
    
    if date not in data:
        data[date] = []
    
    new_activity = {
        'id': int(datetime.now().timestamp() * 1000),
        'activity': activity,
        'time': request.json.get('time'),
        'category': request.json.get('category'),
        'done': False
    }
    
    data[date].append(new_activity)
    save_data(data)
    
    return jsonify({'status': 'success', 'activity': new_activity}), 201

@app.route('/api/activities/<int:activity_id>', methods=['PUT'])
def update_activity(activity_id):
    """Update activity (mark as done, etc.)"""
    data = load_data()
    date = request.json.get('date')
    
    if date in data:
        for activity in data[date]:
            if activity['id'] == activity_id:
                activity.update(request.json)
                save_data(data)
                return jsonify({'status': 'success', 'activity': activity})
    
    return jsonify({'status': 'error', 'message': 'Activity not found'}), 404

@app.route('/api/activities/<int:activity_id>', methods=['DELETE'])
def delete_activity(activity_id):
    """Delete activity"""
    data = load_data()
    date = request.json.get('date')
    
    if date in data:
        data[date] = [a for a in data[date] if a['id'] != activity_id]
        save_data(data)
        return jsonify({'status': 'success'})
    
    return jsonify({'status': 'error', 'message': 'Activity not found'}), 404

@app.route('/api/stats/<date>', methods=['GET'])
def get_stats(date):
    """Get achievement statistics for a date"""
    data = load_data()
    activities = data.get(date, [])
    
    if not activities:
        return jsonify({
            'date': date,
            'total': 0,
            'completed': 0,
            'percentage': 0,
            'categories': {}
        })
    
    completed = sum(1 for a in activities if a['done'])
    total = len(activities)
    percentage = int((completed / total) * 100) if total > 0 else 0
    
    # Category breakdown
    categories = {}
    for activity in activities:
        cat = activity['category']
        if cat not in categories:
            categories[cat] = {'total': 0, 'done': 0}
        categories[cat]['total'] += 1
        if activity['done']:
            categories[cat]['done'] += 1
    
    return jsonify({
        'date': date,
        'total': total,
        'completed': completed,
        'percentage': percentage,
        'categories': categories
    })

@app.route('/api/summary', methods=['GET'])
def get_summary():
    """Get summary statistics for all dates"""
    data = load_data()
    
    total_activities = sum(len(activities) for activities in data.values())
    total_completed = sum(
        sum(1 for a in activities if a['done']) 
        for activities in data.values()
    )
    
    overall_percentage = int((total_completed / total_activities) * 100) if total_activities > 0 else 0
    
    return jsonify({
        'total_activities': total_activities,
        'total_completed': total_completed,
        'overall_percentage': overall_percentage,
        'dates_tracked': len(data)
    })

@app.route('/api/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({'status': 'ok', 'version': '1.0.0'})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
