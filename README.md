# AI Activity Tracker

An efficient activity tracker application with multi-language support, achievement tracking, and notifications.

## Features

✅ **Daily Activity Management** - Add, check, and delete activities with a modern spreadsheet-like interface
✅ **Multi-Language Support** - English, Spanish, French, and German
✅ **Achievement Tracking** - Real-time percentage of completed activities
✅ **Category Organization** - Work, Health, Learning, Personal
✅ **Time Management** - Set specific times for each activity
✅ **Notifications** - Real-time notifications for completed activities
✅ **Responsive Design** - Works on desktop and mobile devices

## Project Structure

```
Tracker AI/
├── front/
│   ├── index.html      # Main dashboard UI
│   ├── style.css       # Modern styling
│   └── app.js          # Frontend logic & translations
├── back/
│   ├── app.py          # Flask backend server
│   └── requirements.txt # Python dependencies
└── README.md           # This file
```

## Frontend Setup

The frontend is a standalone HTML/CSS/JS application. Simply open `front/index.html` in a web browser.

### Features:
- Date picker for selecting any day
- Activity table with checkboxes
- Progress bar showing daily achievement %
- Modal dialog for adding new activities
- Category badges for organization
- Real-time notifications

## Backend Setup

The backend is a Flask server that handles data persistence and statistics.

### Requirements:
- Python 3.8+
- Flask
- Flask-CORS

### Installation:

```bash
cd back
pip install -r requirements.txt
```

### Running the server:

```bash
python app.py
```

The server will run on `http://localhost:5000`

### API Endpoints:

- `GET /api/activities?date=YYYY-MM-DD` - Get activities for a date
- `POST /api/activities` - Add new activity
- `PUT /api/activities/<id>` - Update activity
- `DELETE /api/activities/<id>` - Delete activity
- `GET /api/stats/<date>` - Get statistics for a date
- `GET /api/summary` - Get overall summary
- `GET /api/health` - Health check

## Usage

1. **Add Activity**: Click "+ Add Activity" button
2. **Set Details**: Enter activity name, time, and category
3. **Mark Complete**: Check the checkbox when done
4. **Track Progress**: Watch the achievement % update automatically
5. **Delete Activity**: Click Delete to remove an activity
6. **Change Language**: Select language from dropdown

## Languages Supported

- 🇺🇸 English
- 🇪🇸 Español (Spanish)
- 🇫🇷 Français (French)
- 🇩🇪 Deutsch (German)

## Future Enhancements

- AI-powered activity suggestions
- Email/push notifications
- Weekly/monthly analytics
- Habit tracking
- Goal setting with milestones
- Team collaboration features
