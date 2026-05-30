"""
AI Activity Tracker - Backend Server
Handles data persistence, notifications, and business meeting/appointment management
"""

from flask import Flask, request, jsonify
from flask_cors import CORS
from datetime import datetime
import json
import os
from pathlib import Path

app = Flask(__name__)
CORS(app)

# Data storage files
ACTIVITIES_FILE = 'activities_data.json'
MEETINGS_FILE = 'meetings_data.json'
APPOINTMENTS_FILE = 'appointments_data.json'
CALLS_FILE = 'calls_data.json'

def load_file(filename):
    """Load data from JSON file"""
    if os.path.exists(filename):
        with open(filename, 'r') as f:
            return json.load(f)
    return {}

def save_file(filename, data):
    """Save data to JSON file"""
    with open(filename, 'w') as f:
        json.dump(data, f, indent=2)

# ===== ACTIVITIES ENDPOINTS =====

@app.route('/api/activities', methods=['GET'])
def get_activities():
    """Get activities for a specific date"""
    date = request.args.get('date')
    data = load_file(ACTIVITIES_FILE)
    return jsonify(data.get(date, []))

@app.route('/api/activities', methods=['POST'])
def add_activity():
    """Add a new activity"""
    data = load_file(ACTIVITIES_FILE)
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
    save_file(ACTIVITIES_FILE, data)
    
    return jsonify({'status': 'success', 'activity': new_activity}), 201

@app.route('/api/activities/<int:activity_id>', methods=['PUT'])
def update_activity(activity_id):
    """Update activity (mark as done, etc.)"""
    data = load_file(ACTIVITIES_FILE)
    date = request.json.get('date')
    
    if date in data:
        for activity in data[date]:
            if activity['id'] == activity_id:
                activity.update(request.json)
                save_file(ACTIVITIES_FILE, data)
                return jsonify({'status': 'success', 'activity': activity})
    
    return jsonify({'status': 'error', 'message': 'Activity not found'}), 404

@app.route('/api/activities/<int:activity_id>', methods=['DELETE'])
def delete_activity(activity_id):
    """Delete activity"""
    data = load_file(ACTIVITIES_FILE)
    date = request.json.get('date')
    
    if date in data:
        data[date] = [a for a in data[date] if a['id'] != activity_id]
        save_file(ACTIVITIES_FILE, data)
        return jsonify({'status': 'success'})
    
    return jsonify({'status': 'error', 'message': 'Activity not found'}), 404

# ===== MEETINGS ENDPOINTS =====

@app.route('/api/meetings', methods=['GET'])
def get_meetings():
    """Get meetings for a specific date"""
    date = request.args.get('date')
    data = load_file(MEETINGS_FILE)
    return jsonify(data.get(date, []))

@app.route('/api/meetings', methods=['POST'])
def add_meeting():
    """Add a new meeting"""
    data = load_file(MEETINGS_FILE)
    date = request.json.get('date')
    
    if date not in data:
        data[date] = []
    
    new_meeting = {
        'id': int(datetime.now().timestamp() * 1000),
        'title': request.json.get('title'),
        'time': request.json.get('time'),
        'duration': request.json.get('duration'),
        'attendees': request.json.get('attendees', ''),
        'type': request.json.get('type'),
        'description': request.json.get('description', ''),
        'created_at': datetime.now().isoformat()
    }
    
    data[date].append(new_meeting)
    save_file(MEETINGS_FILE, data)
    
    return jsonify({'status': 'success', 'meeting': new_meeting}), 201

@app.route('/api/meetings/<int:meeting_id>', methods=['DELETE'])
def delete_meeting(meeting_id):
    """Delete meeting"""
    data = load_file(MEETINGS_FILE)
    date = request.json.get('date')
    
    if date in data:
        data[date] = [m for m in data[date] if m['id'] != meeting_id]
        save_file(MEETINGS_FILE, data)
        return jsonify({'status': 'success'})
    
    return jsonify({'status': 'error', 'message': 'Meeting not found'}), 404

# ===== APPOINTMENTS ENDPOINTS =====

@app.route('/api/appointments', methods=['GET'])
def get_appointments():
    """Get appointments for a specific date"""
    date = request.args.get('date')
    data = load_file(APPOINTMENTS_FILE)
    return jsonify(data.get(date, []))

@app.route('/api/appointments', methods=['POST'])
def add_appointment():
    """Add a new appointment"""
    data = load_file(APPOINTMENTS_FILE)
    date = request.json.get('date')
    
    if date not in data:
        data[date] = []
    
    new_appointment = {
        'id': int(datetime.now().timestamp() * 1000),
        'title': request.json.get('title'),
        'time': request.json.get('time'),
        'location': request.json.get('location', ''),
        'contact': request.json.get('contact', ''),
        'reminder': request.json.get('reminder', False),
        'created_at': datetime.now().isoformat()
    }
    
    data[date].append(new_appointment)
    save_file(APPOINTMENTS_FILE, data)
    
    return jsonify({'status': 'success', 'appointment': new_appointment}), 201

@app.route('/api/appointments/<int:appointment_id>', methods=['DELETE'])
def delete_appointment(appointment_id):
    """Delete appointment"""
    data = load_file(APPOINTMENTS_FILE)
    date = request.json.get('date')
    
    if date in data:
        data[date] = [a for a in data[date] if a['id'] != appointment_id]
        save_file(APPOINTMENTS_FILE, data)
        return jsonify({'status': 'success'})
    
    return jsonify({'status': 'error', 'message': 'Appointment not found'}), 404

# ===== CALLS ENDPOINTS =====

@app.route('/api/calls', methods=['GET'])
def get_calls():
    """Get scheduled calls for a specific date"""
    date = request.args.get('date')
    data = load_file(CALLS_FILE)
    return jsonify(data.get(date, []))

@app.route('/api/calls', methods=['POST'])
def add_call():
    """Schedule a new call"""
    data = load_file(CALLS_FILE)
    date = request.json.get('date')
    
    if date not in data:
        data[date] = []
    
    new_call = {
        'id': int(datetime.now().timestamp() * 1000),
        'person': request.json.get('person'),
        'phone': request.json.get('phone'),
        'email': request.json.get('email', ''),
        'time': request.json.get('time'),
        'purpose': request.json.get('purpose'),
        'created_at': datetime.now().isoformat()
    }
    
    data[date].append(new_call)
    save_file(CALLS_FILE, data)
    
    return jsonify({'status': 'success', 'call': new_call}), 201

@app.route('/api/calls/<int:call_id>', methods=['DELETE'])
def delete_call(call_id):
    """Delete scheduled call"""
    data = load_file(CALLS_FILE)
    date = request.json.get('date')
    
    if date in data:
        data[date] = [c for c in data[date] if c['id'] != call_id]
        save_file(CALLS_FILE, data)
        return jsonify({'status': 'success'})
    
    return jsonify({'status': 'error', 'message': 'Call not found'}), 404

# ===== STATISTICS ENDPOINTS =====

@app.route('/api/stats/<date>', methods=['GET'])
def get_stats(date):
    """Get achievement statistics for a date"""
    activities_data = load_file(ACTIVITIES_FILE)
    activities = activities_data.get(date, [])
    
    meetings_data = load_file(MEETINGS_FILE)
    meetings = meetings_data.get(date, [])
    
    appointments_data = load_file(APPOINTMENTS_FILE)
    appointments = appointments_data.get(date, [])
    
    calls_data = load_file(CALLS_FILE)
    calls = calls_data.get(date, [])
    
    if not activities:
        return jsonify({
            'date': date,
            'total_activities': 0,
            'completed_activities': 0,
            'activity_percentage': 0,
            'total_meetings': len(meetings),
            'total_appointments': len(appointments),
            'total_calls': len(calls),
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
        'total_activities': total,
        'completed_activities': completed,
        'activity_percentage': percentage,
        'total_meetings': len(meetings),
        'total_appointments': len(appointments),
        'total_calls': len(calls),
        'categories': categories
    })

@app.route('/api/summary', methods=['GET'])
def get_summary():
    """Get summary statistics for all dates"""
    activities_data = load_file(ACTIVITIES_FILE)
    meetings_data = load_file(MEETINGS_FILE)
    appointments_data = load_file(APPOINTMENTS_FILE)
    calls_data = load_file(CALLS_FILE)
    
    total_activities = sum(len(activities) for activities in activities_data.values())
    total_completed = sum(
        sum(1 for a in activities if a['done']) 
        for activities in activities_data.values()
    )
    
    overall_percentage = int((total_completed / total_activities) * 100) if total_activities > 0 else 0
    
    total_meetings = sum(len(meetings) for meetings in meetings_data.values())
    total_appointments = sum(len(appointments) for appointments in appointments_data.values())
    total_calls = sum(len(calls) for calls in calls_data.values())
    
    return jsonify({
        'total_activities': total_activities,
        'total_completed': total_completed,
        'activity_percentage': overall_percentage,
        'total_meetings': total_meetings,
        'total_appointments': total_appointments,
        'total_calls': total_calls,
        'dates_tracked': len(activities_data)
    })

@app.route('/api/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({'status': 'ok', 'version': '2.0.0', 'features': ['activities', 'meetings', 'appointments', 'calls']})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)

if __name__ == '__main__':
    app.run(debug=True, port=5000)
