// Translations
const translations = {
    en: {
        appTitle: "AI Activity Tracker",
        subtitle: "Business Meeting & Appointment Manager",
        dateLabel: "Select Date:",
        progressLabel: "Daily Achievement:",
        plansTitle: "📋 Row A: Plans & Meetings",
        actionsTitle: "✓ Row B: Daily Actions",
        addMeetingBtn: "+ Add Meeting",
        addActivityBtn: "+ Add Activity",
        meetingsBoxTitle: "Scheduled Meetings",
        appointmentsBoxTitle: "Appointments",
        callsBoxTitle: "Scheduled Calls",
        activitiesTitle: "Daily Activities",
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
        addedNotification: "New activity added: ",
        meetingModalTitle: "Add Meeting",
        labelMeetingTitle: "Meeting Title:",
        labelMeetingTime: "Time:",
        labelMeetingDuration: "Duration (min):",
        labelMeetingAttendees: "Attendees (emails):",
        labelMeetingType: "Meeting Type:",
        labelMeetingDescription: "Description:",
        submitMeetingBtn: "Add Meeting",
        appointmentModalTitle: "Add Appointment",
        labelAppointmentTitle: "Appointment Title:",
        labelAppointmentTime: "Time:",
        labelAppointmentLocation: "Location:",
        labelAppointmentContact: "Contact Email:",
        labelReminder: "Set reminder (15 min before)",
        submitAppointmentBtn: "Add Appointment",
        callModalTitle: "Schedule Call",
        labelCallPerson: "Person/Company:",
        labelCallPhone: "Phone Number:",
        labelCallEmail: "Email:",
        labelCallTime: "Scheduled Time:",
        labelCallPurpose: "Purpose:",
        submitCallBtn: "Schedule Call",
        callBtn: "☎ Call",
        emailBtn: "📧 Email",
        meetingAdded: "Meeting added successfully",
        appointmentAdded: "Appointment added successfully",
        callScheduled: "Call scheduled successfully"
    },
    es: {
        appTitle: "Rastreador de Actividades IA",
        subtitle: "Gestor de Reuniones y Citas Comerciales",
        dateLabel: "Seleccionar fecha:",
        progressLabel: "Logro diario:",
        plansTitle: "📋 Fila A: Planes y Reuniones",
        actionsTitle: "✓ Fila B: Acciones Diarias",
        addMeetingBtn: "+ Agregar Reunión",
        addActivityBtn: "+ Agregar Actividad",
        meetingsBoxTitle: "Reuniones Programadas",
        appointmentsBoxTitle: "Citas",
        callsBoxTitle: "Llamadas Programadas",
        activitiesTitle: "Actividades Diarias",
        thDone: "Hecho",
        thActivity: "Actividad",
        thTime: "Tiempo",
        thCategory: "Categoría",
        thActions: "Acciones",
        modalTitle: "Agregar Nueva Actividad",
        labelActivity: "Actividad:",
        labelTime: "Tiempo:",
        labelCategory: "Categoría:",
        submitBtn: "Agregar Actividad",
        deleteBtn: "Eliminar",
        completedNotification: "Actividad completada: ",
        addedNotification: "Nueva actividad agregada: ",
        meetingModalTitle: "Agregar Reunión",
        labelMeetingTitle: "Título de Reunión:",
        labelMeetingTime: "Hora:",
        labelMeetingDuration: "Duración (min):",
        labelMeetingAttendees: "Asistentes (emails):",
        labelMeetingType: "Tipo de Reunión:",
        labelMeetingDescription: "Descripción:",
        submitMeetingBtn: "Agregar Reunión",
        appointmentModalTitle: "Agregar Cita",
        labelAppointmentTitle: "Título de Cita:",
        labelAppointmentTime: "Hora:",
        labelAppointmentLocation: "Ubicación:",
        labelAppointmentContact: "Email de Contacto:",
        labelReminder: "Establecer recordatorio (15 min antes)",
        submitAppointmentBtn: "Agregar Cita",
        callModalTitle: "Programar Llamada",
        labelCallPerson: "Persona/Empresa:",
        labelCallPhone: "Número de Teléfono:",
        labelCallEmail: "Email:",
        labelCallTime: "Hora Programada:",
        labelCallPurpose: "Propósito:",
        submitCallBtn: "Programar Llamada",
        callBtn: "☎ Llamar",
        emailBtn: "📧 Email",
        meetingAdded: "Reunión agregada exitosamente",
        appointmentAdded: "Cita agregada exitosamente",
        callScheduled: "Llamada programada exitosamente"
    },
    fr: {
        appTitle: "Suivi des Activités IA",
        subtitle: "Gestionnaire de Réunions et de Rendez-vous Professionnels",
        dateLabel: "Sélectionner la date:",
        progressLabel: "Réussite quotidienne:",
        plansTitle: "📋 Ligne A: Plans et Réunions",
        actionsTitle: "✓ Ligne B: Actions Quotidiennes",
        addMeetingBtn: "+ Ajouter Réunion",
        addActivityBtn: "+ Ajouter Activité",
        meetingsBoxTitle: "Réunions Programmées",
        appointmentsBoxTitle: "Rendez-vous",
        callsBoxTitle: "Appels Programmés",
        activitiesTitle: "Activités Quotidiennes",
        thDone: "Fait",
        thActivity: "Activité",
        thTime: "Temps",
        thCategory: "Catégorie",
        thActions: "Actions",
        modalTitle: "Ajouter une Nouvelle Activité",
        labelActivity: "Activité:",
        labelTime: "Temps:",
        labelCategory: "Catégorie:",
        submitBtn: "Ajouter Activité",
        deleteBtn: "Supprimer",
        completedNotification: "Activité complétée: ",
        addedNotification: "Nouvelle activité ajoutée: ",
        meetingModalTitle: "Ajouter Réunion",
        labelMeetingTitle: "Titre de Réunion:",
        labelMeetingTime: "Heure:",
        labelMeetingDuration: "Durée (min):",
        labelMeetingAttendees: "Participants (emails):",
        labelMeetingType: "Type de Réunion:",
        labelMeetingDescription: "Description:",
        submitMeetingBtn: "Ajouter Réunion",
        appointmentModalTitle: "Ajouter Rendez-vous",
        labelAppointmentTitle: "Titre du Rendez-vous:",
        labelAppointmentTime: "Heure:",
        labelAppointmentLocation: "Lieu:",
        labelAppointmentContact: "Email de Contact:",
        labelReminder: "Définir un rappel (15 min avant)",
        submitAppointmentBtn: "Ajouter Rendez-vous",
        callModalTitle: "Programmer Appel",
        labelCallPerson: "Personne/Entreprise:",
        labelCallPhone: "Numéro de Téléphone:",
        labelCallEmail: "Email:",
        labelCallTime: "Heure Programmée:",
        labelCallPurpose: "Objectif:",
        submitCallBtn: "Programmer Appel",
        callBtn: "☎ Appel",
        emailBtn: "📧 Email",
        meetingAdded: "Réunion ajoutée avec succès",
        appointmentAdded: "Rendez-vous ajouté avec succès",
        callScheduled: "Appel programmé avec succès"
    },
    de: {
        appTitle: "KI-Aktivitätsverfolgung",
        subtitle: "Geschäftsmeeting- und Terminmanager",
        dateLabel: "Datum auswählen:",
        progressLabel: "Tägliche Errungenschaft:",
        plansTitle: "📋 Zeile A: Pläne und Meetings",
        actionsTitle: "✓ Zeile B: Tägliche Maßnahmen",
        addMeetingBtn: "+ Meeting Hinzufügen",
        addActivityBtn: "+ Aktivität Hinzufügen",
        meetingsBoxTitle: "Geplante Meetings",
        appointmentsBoxTitle: "Termine",
        callsBoxTitle: "Geplante Anrufe",
        activitiesTitle: "Tägliche Aktivitäten",
        thDone: "Fertig",
        thActivity: "Aktivität",
        thTime: "Zeit",
        thCategory: "Kategorie",
        thActions: "Aktionen",
        modalTitle: "Neue Aktivität Hinzufügen",
        labelActivity: "Aktivität:",
        labelTime: "Zeit:",
        labelCategory: "Kategorie:",
        submitBtn: "Aktivität Hinzufügen",
        deleteBtn: "Löschen",
        completedNotification: "Aktivität abgeschlossen: ",
        addedNotification: "Neue Aktivität hinzugefügt: ",
        meetingModalTitle: "Meeting Hinzufügen",
        labelMeetingTitle: "Meeting-Titel:",
        labelMeetingTime: "Uhrzeit:",
        labelMeetingDuration: "Dauer (min):",
        labelMeetingAttendees: "Teilnehmer (E-Mails):",
        labelMeetingType: "Meeting-Typ:",
        labelMeetingDescription: "Beschreibung:",
        submitMeetingBtn: "Meeting Hinzufügen",
        appointmentModalTitle: "Termin Hinzufügen",
        labelAppointmentTitle: "Termin-Titel:",
        labelAppointmentTime: "Uhrzeit:",
        labelAppointmentLocation: "Ort:",
        labelAppointmentContact: "Kontakt-E-Mail:",
        labelReminder: "Erinnerung setzen (15 Min. vorher)",
        submitAppointmentBtn: "Termin Hinzufügen",
        callModalTitle: "Anruf Planen",
        labelCallPerson: "Person/Unternehmen:",
        labelCallPhone: "Telefonnummer:",
        labelCallEmail: "E-Mail:",
        labelCallTime: "Geplante Uhrzeit:",
        labelCallPurpose: "Zweck:",
        submitCallBtn: "Anruf Planen",
        callBtn: "☎ Anruf",
        emailBtn: "📧 Email",
        meetingAdded: "Meeting erfolgreich hinzugefügt",
        appointmentAdded: "Termin erfolgreich hinzugefügt",
        callScheduled: "Anruf erfolgreich geplant"
    }
};

let currentLanguage = 'en';
let activities = {};
let meetings = {};
let appointments = {};
let calls = {};

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    setToday();
    loadData();
    setupEventListeners();
    updateUI();
});

function setupEventListeners() {
    // Date input
    document.getElementById('dateInput').addEventListener('change', () => {
        loadData();
        updateUI();
    });

    // Navigation buttons
    document.getElementById('prevDayBtn').addEventListener('click', goToPreviousDay);
    document.getElementById('nextDayBtn').addEventListener('click', goToNextDay);

    // Quick Call Button
    document.getElementById('quickCallBtn').addEventListener('click', openQuickCallModal);

    // Language selector
    document.getElementById('languageSelect').addEventListener('change', (e) => {
        currentLanguage = e.target.value;
        updateLanguage();
    });

    // Activity Modal
    const activityModal = document.getElementById('modal');
    const addActivityBtn = document.getElementById('addActivityBtn');
    const closeActivityBtn = document.querySelector('.close');
    const activityForm = document.getElementById('activityForm');

    addActivityBtn.addEventListener('click', () => {
        activityModal.style.display = 'block';
    });

    closeActivityBtn.addEventListener('click', () => {
        activityModal.style.display = 'none';
    });

    activityForm.addEventListener('submit', addActivity);
    document.getElementById('quickAddBtn').addEventListener('click', addQuickActivity);
    document.getElementById('quickActivityInput').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addQuickActivity();
        }
    });

    // Meeting Modal
    const meetingModal = document.getElementById('meetingModal');
    const addMeetingBtn = document.getElementById('addMeetingBtn');
    const meetingForm = document.getElementById('meetingForm');

    addMeetingBtn.addEventListener('click', () => {
        meetingModal.style.display = 'block';
    });

    meetingForm.addEventListener('submit', addMeeting);

    // Appointment Modal
    const appointmentModal = document.getElementById('appointmentModal');
    const appointmentForm = document.getElementById('appointmentForm');

    appointmentForm.addEventListener('submit', addAppointment);

    // Call Modal
    const callModal = document.getElementById('callModal');
    const callForm = document.getElementById('callForm');

    callForm.addEventListener('submit', addCall);

    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === activityModal) activityModal.style.display = 'none';
        if (e.target === meetingModal) meetingModal.style.display = 'none';
        if (e.target === appointmentModal) appointmentModal.style.display = 'none';
        if (e.target === callModal) callModal.style.display = 'none';
        if (e.target === document.getElementById('quickCallModal')) closeQuickCallModal();
    });
}

function closeMeetingModal() {
    document.getElementById('meetingModal').style.display = 'none';
}

function closeAppointmentModal() {
    document.getElementById('appointmentModal').style.display = 'none';
}

function closeCallModal() {
    document.getElementById('callModal').style.display = 'none';
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
    document.getElementById('subtitle').textContent = t.subtitle;
    document.getElementById('dateLabel').textContent = t.dateLabel;
    document.getElementById('progressLabel').textContent = t.progressLabel;
    document.getElementById('plansTitle').textContent = t.plansTitle;
    document.getElementById('actionsTitle').textContent = t.actionsTitle;
    document.getElementById('addMeetingBtn').textContent = t.addMeetingBtn;
    document.getElementById('addActivityBtn').textContent = t.addActivityBtn;
    document.getElementById('meetingsBoxTitle').textContent = t.meetingsBoxTitle;
    document.getElementById('appointmentsBoxTitle').textContent = t.appointmentsBoxTitle;
    document.getElementById('callsBoxTitle').textContent = t.callsBoxTitle;
    document.getElementById('thDone').textContent = t.thDone;
    document.getElementById('thActivity').textContent = t.thActivity;
    document.getElementById('thTime').textContent = t.thTime;
    document.getElementById('thCategory').textContent = t.thCategory;
    document.getElementById('thActions').textContent = t.thActions;
}

function getDate() {
    return document.getElementById('dateInput').value;
}

function loadData() {
    const date = getDate();
    if (!activities[date]) activities[date] = [];
    if (!meetings[date]) meetings[date] = [];
    if (!appointments[date]) appointments[date] = [];
    if (!calls[date]) calls[date] = [];
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

    showToastNotification(translations[currentLanguage].addedNotification + activity, 'success');
    document.getElementById('activityForm').reset();
    document.getElementById('modal').style.display = 'none';
    renderActivities();
    updateProgress();
}

function addQuickActivity() {
    const date = getDate();
    const activity = document.getElementById('quickActivityInput').value.trim();
    const time = document.getElementById('quickTimeInput').value;
    const category = document.getElementById('quickCategoryInput').value;

    if (!activity || !time) {
        showToastNotification('Please enter activity and time.', 'warning');
        return;
    }

    activities[date].push({
        id: Date.now(),
        activity,
        time,
        category,
        done: false
    });

    showToastNotification(translations[currentLanguage].addedNotification + activity, 'success');
    document.getElementById('quickActivityInput').value = '';
    document.getElementById('quickTimeInput').value = '';
    document.getElementById('quickCategoryInput').value = 'work';
    document.getElementById('quickActivityInput').focus();
    renderActivities();
    updateProgress();
}

function addMeeting(e) {
    e.preventDefault();
    const date = getDate();
    const title = document.getElementById('meetingTitle').value;
    const time = document.getElementById('meetingTime').value;
    const duration = document.getElementById('meetingDuration').value;
    const attendees = document.getElementById('meetingAttendees').value;
    const type = document.getElementById('meetingType').value;
    const description = document.getElementById('meetingDescription').value;

    meetings[date].push({
        id: Date.now(),
        title,
        time,
        duration,
        attendees,
        type,
        description
    });

    showNotification(translations[currentLanguage].meetingAdded, 'success');
    document.getElementById('meetingForm').reset();
    closeMeetingModal();
    renderMeetings();
}

function addAppointment(e) {
    e.preventDefault();
    const date = getDate();
    const title = document.getElementById('appointmentTitle').value;
    const time = document.getElementById('appointmentTime').value;
    const location = document.getElementById('appointmentLocation').value;
    const contact = document.getElementById('appointmentContact').value;
    const reminder = document.getElementById('appointmentReminder').checked;

    appointments[date].push({
        id: Date.now(),
        title,
        time,
        location,
        contact,
        reminder,
        completed: false
    });

    showNotification(translations[currentLanguage].appointmentAdded, 'success');
    document.getElementById('appointmentForm').reset();
    closeAppointmentModal();
    renderAppointments();
    renderSchedule();
    updateProgress();
}

function addCall(e) {
    e.preventDefault();
    const date = getDate();
    const person = document.getElementById('callPerson').value;
    const phone = document.getElementById('callPhone').value;
    const email = document.getElementById('callEmail').value;
    const time = document.getElementById('callTime').value;
    const purpose = document.getElementById('callPurpose').value;

    calls[date].push({
        id: Date.now(),
        person,
        phone,
        email,
        time,
        purpose
    });

    showNotification(translations[currentLanguage].callScheduled, 'success');
    document.getElementById('callForm').reset();
    closeCallModal();
    renderCalls();
}

function renderMeetings() {
    const date = getDate();
    const list = document.getElementById('meetingsList');
    const count = document.getElementById('meetingCount');
    list.innerHTML = '';
    count.textContent = meetings[date].length;

    meetings[date].forEach(meeting => {
        const div = document.createElement('div');
        div.className = 'meeting-item';
        div.innerHTML = `
            <div class="meeting-time">🕐 ${meeting.time}</div>
            <div class="meeting-title">${meeting.title}</div>
            <div class="meeting-type">Type: ${meeting.type}</div>
            <div class="item-actions">
                <button class="action-btn email-btn" onclick="sendMeetingEmail('${meeting.attendees}', '${meeting.title}')">📧 Email</button>
                <button class="action-btn delete-btn" onclick="deleteMeeting(${meeting.id})">🗑 Delete</button>
            </div>
        `;
        list.appendChild(div);
    });
}

function renderAppointments() {
    const date = getDate();
    const list = document.getElementById('appointmentsList');
    const count = document.getElementById('appointmentCount');
    list.innerHTML = '';
    count.textContent = appointments[date].length;

    appointments[date].forEach(apt => {
        const div = document.createElement('div');
        div.className = 'appointment-item';
        div.innerHTML = `
            <div class="appointment-time">🕐 ${apt.time}</div>
            <div class="appointment-title">${apt.title}</div>
            <div class="appointment-location">📍 ${apt.location || 'Not specified'}</div>
            <div class="appointment-status">Status: ${apt.completed ? 'Completed' : 'Pending'}</div>
            <div class="item-actions">
                <button class="action-btn status-btn" onclick="toggleAppointment(${apt.id})">${apt.completed ? 'Mark Pending' : 'Mark Completed'}</button>
                <button class="action-btn email-btn" onclick="sendEmail('${apt.contact}')">📧 Email</button>
                <button class="action-btn delete-btn" onclick="deleteAppointment(${apt.id})">🗑 Delete</button>
            </div>
        `;
        list.appendChild(div);
    });
}

function renderSchedule() {
    const date = getDate();
    const list = document.getElementById('scheduleList');
    const scheduleCount = document.getElementById('scheduleCount');
    const items = [];

    meetings[date].forEach(meeting => {
        items.push({
            time: meeting.time,
            type: 'Meeting',
            title: meeting.title,
            details: meeting.type,
            status: 'Scheduled'
        });
    });

    appointments[date].forEach(apt => {
        items.push({
            time: apt.time,
            type: 'Appointment',
            title: apt.title,
            details: apt.location || 'No location',
            status: apt.completed ? 'Completed' : 'Pending'
        });
    });

    calls[date].forEach(call => {
        items.push({
            time: call.time,
            type: 'Call',
            title: call.person,
            details: call.purpose,
            status: 'Scheduled'
        });
    });

    items.sort((a, b) => a.time.localeCompare(b.time));
    scheduleCount.textContent = `${items.length} items`;
    list.innerHTML = '';

    if (items.length === 0) {
        list.innerHTML = '<div class="schedule-empty">No items scheduled for today.</div>';
        return;
    }

    items.forEach(item => {
        const div = document.createElement('div');
        div.className = 'schedule-item';
        div.innerHTML = `
            <div class="schedule-time">${item.time}</div>
            <div class="schedule-detail">
                <div class="schedule-title">${item.type}: ${item.title}</div>
                <div class="schedule-meta">${item.details} · <span class="schedule-status">${item.status}</span></div>
            </div>
        `;
        list.appendChild(div);
    });
}

function toggleAppointment(id) {
    const date = getDate();
    const appointment = appointments[date].find(a => a.id === id);
    if (appointment) {
        appointment.completed = !appointment.completed;
        renderAppointments();
        renderSchedule();
        updateProgress();
    }
}

function renderCalls() {
    const date = getDate();
    const list = document.getElementById('callsList');
    const count = document.getElementById('callCount');
    list.innerHTML = '';
    count.textContent = calls[date].length;

    calls[date].forEach(call => {
        const div = document.createElement('div');
        div.className = 'call-item';
        div.innerHTML = `
            <div class="call-time">🕐 ${call.time}</div>
            <div class="call-title">${call.person}</div>
            <div class="call-phone">☎ ${call.phone}</div>
            <div class="item-actions">
                <button class="action-btn call-btn" onclick="initiateCall('${call.phone}')">☎ Call</button>
                <button class="action-btn email-btn" onclick="sendEmail('${call.email}')">📧 Email</button>
                <button class="action-btn delete-btn" onclick="deleteCall(${call.id})">🗑 Delete</button>
            </div>
        `;
        list.appendChild(div);
    });
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
        checkbox.className = 'checkbox-input';
        checkbox.checked = item.done;
        checkbox.addEventListener('change', () => toggleActivity(item.id));

        const categoryBadge = document.createElement('span');
        categoryBadge.className = `category-badge ${item.category}`;
        categoryBadge.textContent = item.category.charAt(0).toUpperCase() + item.category.slice(1);

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-activity-btn';
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

function deleteMeeting(id) {
    const date = getDate();
    meetings[date] = meetings[date].filter(m => m.id !== id);
    renderMeetings();
    renderSchedule();
}

function deleteAppointment(id) {
    const date = getDate();
    appointments[date] = appointments[date].filter(a => a.id !== id);
    renderAppointments();
    renderSchedule();
    updateProgress();
}

function deleteCall(id) {
    const date = getDate();
    calls[date] = calls[date].filter(c => c.id !== id);
    renderCalls();
    renderSchedule();
}

function sendEmail(email) {
    if (email) {
        window.location.href = `mailto:${email}`;
    } else {
        alert('No email address available');
    }
}

function sendMeetingEmail(attendees, title) {
    if (attendees) {
        const subject = `Meeting: ${title}`;
        const body = `Meeting: ${title}\n\nPlease confirm your attendance.`;
        window.location.href = `mailto:${attendees}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    } else {
        alert('No attendees specified');
    }
}

function initiateCall(phone) {
    // This creates a tel: link that works on devices with calling capabilities
    window.location.href = `tel:${phone.replace(/\D/g, '')}`;
}

function updateProgress() {
    const date = getDate();
    const activityItems = activities[date] || [];
    const appointmentItems = appointments[date] || [];

    const completedActivities = activityItems.filter(a => a.done).length;
    const completedAppointments = appointmentItems.filter(a => a.completed).length;
    const totalItems = activityItems.length + appointmentItems.length;
    const completedItems = completedActivities + completedAppointments;
    const percent = totalItems === 0 ? 0 : Math.round((completedItems / totalItems) * 100);

    document.getElementById('progressFill').style.width = percent + '%';
    document.getElementById('progressPercent').textContent = percent + '%';

    if (document.getElementById('trackerPending')) {
        document.getElementById('trackerPending').textContent = totalItems - completedItems;
        document.getElementById('trackerCompleted').textContent = completedItems;
        const now = new Date().toISOString().substr(11, 5);
        const overdueCount = activityItems.filter(a => a.time && a.time < now && !a.done).length +
            appointmentItems.filter(a => a.time && a.time < now && !a.completed).length;
        document.getElementById('trackerOverdue').textContent = overdueCount;
    }
}

function showNotification(message, type = 'info') {
    const notificationBox = document.getElementById('notificationBox');
    const notification = document.createElement('div');
    notification.className = `notification`;
    notification.textContent = message;

    notificationBox.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 4000);
}

// Pop-up Toast Notification System
function showToastNotification(message, type = 'success') {
    const toastContainer = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    const icon = getToastIcon(type);
    toast.innerHTML = `
        <span class="toast-icon">${icon}</span>
        <span class="toast-message">${message}</span>
        <button class="toast-close" onclick="this.parentElement.remove()">×</button>
    `;

    toastContainer.appendChild(toast);

    // Auto-remove after 4 seconds
    setTimeout(() => {
        if (toast.parentElement) {
            toast.remove();
        }
    }, 4000);
}

function getToastIcon(type) {
    const icons = {
        'success': '✓',
        'error': '✕',
        'warning': '⚠',
        'info': 'ℹ'
    };
    return icons[type] || icons['info'];
}

// Calendar Navigation Functions
function goToPreviousDay() {
    const dateInput = document.getElementById('dateInput');
    const currentDate = new Date(dateInput.value + 'T00:00:00');
    currentDate.setDate(currentDate.getDate() - 1);
    const newDate = currentDate.toISOString().split('T')[0];
    dateInput.value = newDate;
    loadData();
    updateUI();
}

function goToNextDay() {
    const dateInput = document.getElementById('dateInput');
    const currentDate = new Date(dateInput.value + 'T00:00:00');
    currentDate.setDate(currentDate.getDate() + 1);
    const newDate = currentDate.toISOString().split('T')[0];
    dateInput.value = newDate;
    loadData();
    updateUI();
}

// Quick Call Functionality
function openQuickCallModal() {
    const modal = document.getElementById('quickCallModal');
    modal.style.display = 'block';
    populateScheduledCalls();
}

function closeQuickCallModal() {
    document.getElementById('quickCallModal').style.display = 'none';
}

function populateScheduledCalls() {
    const date = getDate();
    const list = document.getElementById('scheduledCallsList');
    list.innerHTML = '';

    if (!calls[date] || calls[date].length === 0) {
        list.innerHTML = '<p style="text-align: center; color: #999;">No scheduled calls for today.</p>';
        return;
    }

    calls[date].forEach(call => {
        const div = document.createElement('div');
        div.className = 'quick-call-item';
        div.innerHTML = `
            <div>
                <div style="font-weight: 600; color: #0d7377;">${call.person}</div>
                <div style="color: #666; font-size: 0.9rem;">☎ ${call.phone}</div>
                <div style="color: #999; font-size: 0.85rem;">⏰ ${call.time}</div>
            </div>
            <button onclick="makeQuickCallByPhone('${call.phone}')" class="quick-call-action-btn">Call Now</button>
        `;
        list.appendChild(div);
    });
}

function makeQuickCall() {
    const phone = document.getElementById('quickPhoneInput').value;
    if (phone) {
        makeQuickCallByPhone(phone);
    } else {
        showToastNotification('Please enter a phone number', 'warning');
    }
}

function makeQuickCallByPhone(phone) {
    const cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone) {
        showToastNotification(`Initiating call to ${phone}...`, 'info');
        window.location.href = `tel:${cleanPhone}`;
        setTimeout(() => {
            closeQuickCallModal();
        }, 500);
    }
}

function updateUI() {
    updateDateDisplay();
    loadData();
    renderActivities();
    renderMeetings();
    renderAppointments();
    renderCalls();
    renderSchedule();
    updateProgress();
}
