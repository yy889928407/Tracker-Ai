// Translations
const translations = {
    en: {
        appTitle: "AI Activity Tracker",
        dateLabel: "Select Date:",
        progressLabel: "Daily Achievement:",
        activitiesTitle: "Daily Activities",
        addActivityBtn: "+ Add Activity",
        thDone: "Done",
        thActivity: "Activity",
        thTime: "Time",
        thCategory: "Category",
        thActions: "Actions",
        modalTitle: "Add New Activity",
        labelActivity: "Activity:",
        labelTime: "Time:",
        labelCategory: "Category:",
        submitBtn: "Add Activity",
        deleteBtn: "Delete",
        completedNotification: "Activity completed: ",
        addedNotification: "New activity added: "
    },
    es: {
        appTitle: "Rastreador de Actividades IA",
        dateLabel: "Seleccionar fecha:",
        progressLabel: "Logro diario:",
        activitiesTitle: "Actividades diarias",
        addActivityBtn: "+ Agregar actividad",
        thDone: "Hecho",
        thActivity: "Actividad",
        thTime: "Tiempo",
        thCategory: "Categoría",
        thActions: "Acciones",
        modalTitle: "Agregar nueva actividad",
        labelActivity: "Actividad:",
        labelTime: "Tiempo:",
        labelCategory: "Categoría:",
        submitBtn: "Agregar actividad",
        deleteBtn: "Eliminar",
        completedNotification: "Actividad completada: ",
        addedNotification: "Nueva actividad agregada: "
    },
    fr: {
        appTitle: "Suivi des Activités IA",
        dateLabel: "Sélectionner la date:",
        progressLabel: "Réussite quotidienne:",
        activitiesTitle: "Activités quotidiennes",
        addActivityBtn: "+ Ajouter une activité",
        thDone: "Fait",
        thActivity: "Activité",
        thTime: "Temps",
        thCategory: "Catégorie",
        thActions: "Actions",
        modalTitle: "Ajouter une nouvelle activité",
        labelActivity: "Activité:",
        labelTime: "Temps:",
        labelCategory: "Catégorie:",
        submitBtn: "Ajouter une activité",
        deleteBtn: "Supprimer",
        completedNotification: "Activité complétée: ",
        addedNotification: "Nouvelle activité ajoutée: "
    },
    de: {
        appTitle: "KI-Aktivitätsverfolgung",
        dateLabel: "Datum auswählen:",
        progressLabel: "Tägliche Errungenschaft:",
        activitiesTitle: "Tägliche Aktivitäten",
        addActivityBtn: "+ Aktivität hinzufügen",
        thDone: "Fertig",
        thActivity: "Aktivität",
        thTime: "Zeit",
        thCategory: "Kategorie",
        thActions: "Aktionen",
        modalTitle: "Neue Aktivität hinzufügen",
        labelActivity: "Aktivität:",
        labelTime: "Zeit:",
        labelCategory: "Kategorie:",
        submitBtn: "Aktivität hinzufügen",
        deleteBtn: "Löschen",
        completedNotification: "Aktivität abgeschlossen: ",
        addedNotification: "Neue Aktivität hinzugefügt: "
    }
};

let currentLanguage = 'en';
let activities = {};

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    setToday();
    loadActivities();
    setupEventListeners();
    updateUI();
});

function setupEventListeners() {
    // Date input
    document.getElementById('dateInput').addEventListener('change', () => {
        loadActivities();
        updateUI();
    });

    // Language selector
    document.getElementById('languageSelect').addEventListener('change', (e) => {
        currentLanguage = e.target.value;
        updateLanguage();
    });

    // Modal controls
    const modal = document.getElementById('modal');
    const addBtn = document.getElementById('addActivityBtn');
    const closeBtn = document.querySelector('.close');
    const form = document.getElementById('activityForm');

    addBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    form.addEventListener('submit', addActivity);
}

function setToday() {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('dateInput').value = today;
    updateDateDisplay();
}

function updateDateDisplay() {
    const dateInput = document.getElementById('dateInput').value;
    const date = new Date(dateInput + 'T00:00:00');
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formatted = date.toLocaleDateString('en-US', options);
    document.getElementById('displayDate').textContent = formatted;
}

function updateLanguage() {
    const t = translations[currentLanguage];
    document.getElementById('appTitle').textContent = t.appTitle;
    document.getElementById('dateLabel').textContent = t.dateLabel;
    document.getElementById('progressLabel').textContent = t.progressLabel;
    document.getElementById('activitiesTitle').textContent = t.activitiesTitle;
    document.getElementById('addActivityBtn').textContent = t.addActivityBtn;
    document.getElementById('thDone').textContent = t.thDone;
    document.getElementById('thActivity').textContent = t.thActivity;
    document.getElementById('thTime').textContent = t.thTime;
    document.getElementById('thCategory').textContent = t.thCategory;
    document.getElementById('thActions').textContent = t.thActions;
    document.getElementById('modalTitle').textContent = t.modalTitle;
    document.getElementById('labelActivity').textContent = t.labelActivity;
    document.getElementById('labelTime').textContent = t.labelTime;
    document.getElementById('labelCategory').textContent = t.labelCategory;
    document.getElementById('submitBtn').textContent = t.submitBtn;
}

function getDate() {
    return document.getElementById('dateInput').value;
}

function loadActivities() {
    const date = getDate();
    if (!activities[date]) {
        activities[date] = [];
    }
    renderActivities();
}

function addActivity(e) {
    e.preventDefault();
    const date = getDate();
    const activity = document.getElementById('activityInput').value;
    const time = document.getElementById('timeInput').value;
    const category = document.getElementById('categoryInput').value;

    activities[date].push({
        id: Date.now(),
        activity,
        time,
        category,
        done: false
    });

    showNotification(translations[currentLanguage].addedNotification + activity, 'success');
    document.getElementById('activityForm').reset();
    document.getElementById('modal').style.display = 'none';
    renderActivities();
    updateProgress();
}

function renderActivities() {
    const date = getDate();
    const tbody = document.getElementById('activitiesBody');
    tbody.innerHTML = '';

    if (!activities[date] || activities[date].length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" style="text-align: center; color: #999; padding: 40px;">No activities yet. Add one to get started!</td></tr>';
        return;
    }

    activities[date].forEach(item => {
        const tr = document.createElement('tr');
        tr.className = item.done ? 'row-completed' : '';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = item.done;
        checkbox.addEventListener('change', () => toggleActivity(item.id));

        const categoryBadge = document.createElement('span');
        categoryBadge.className = `category-badge ${item.category}`;
        categoryBadge.textContent = item.category.charAt(0).toUpperCase() + item.category.slice(1);

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn-small btn-delete';
        deleteBtn.textContent = translations[currentLanguage].deleteBtn;
        deleteBtn.addEventListener('click', () => deleteActivity(item.id));

        tr.innerHTML = `
            <td class="checkbox-cell"></td>
            <td>${item.activity}</td>
            <td>${item.time}</td>
            <td></td>
            <td class="action-buttons"></td>
        `;

        tr.cells[0].appendChild(checkbox);
        tr.cells[3].appendChild(categoryBadge);
        tr.cells[4].appendChild(deleteBtn);

        tbody.appendChild(tr);
    });
}

function toggleActivity(id) {
    const date = getDate();
    const activity = activities[date].find(a => a.id === id);
    if (activity) {
        activity.done = !activity.done;
        if (activity.done) {
            showNotification(translations[currentLanguage].completedNotification + activity.activity, 'success');
        }
        renderActivities();
        updateProgress();
    }
}

function deleteActivity(id) {
    const date = getDate();
    activities[date] = activities[date].filter(a => a.id !== id);
    renderActivities();
    updateProgress();
}

function updateProgress() {
    const date = getDate();
    if (!activities[date] || activities[date].length === 0) {
        document.getElementById('progressFill').style.width = '0%';
        document.getElementById('progressPercent').textContent = '0%';
        return;
    }

    const completed = activities[date].filter(a => a.done).length;
    const total = activities[date].length;
    const percent = Math.round((completed / total) * 100);

    document.getElementById('progressFill').style.width = percent + '%';
    document.getElementById('progressPercent').textContent = percent + '%';
}

function showNotification(message, type = 'info') {
    const notificationBox = document.getElementById('notificationBox');
    const notification = document.createElement('div');
    notification.className = `notification-item ${type}`;
    notification.textContent = message;

    notificationBox.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

function updateUI() {
    updateDateDisplay();
    loadActivities();
    updateProgress();
}
