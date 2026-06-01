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
        meetingApproved: "Meeting approved and booked",
        meetingPending: "Meeting saved as pending approval",
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
let calls = {};
let currentMeetingChannel = 'phone';
let currentMeetingCategory = 'Personal';
let callMuted = false;
let cameraActive = true;

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
    const closeActivityBtn = document.querySelector('#modal .close');
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
    const closeMeetingBtn = document.querySelector('#meetingModal .close');
    const meetingForm = document.getElementById('meetingForm');

    addMeetingBtn.addEventListener('click', () => openMeetingModal());

    closeMeetingBtn.addEventListener('click', () => closeMeetingModal());

    meetingForm.addEventListener('submit', addMeeting);

    // Top Call Bar controls
    document.getElementById('channelPhoneBtn').addEventListener('click', () => selectCallChannel('phone'));
    document.getElementById('channelVideoBtn').addEventListener('click', () => selectCallChannel('video'));
    document.getElementById('meetingTypePersonal').addEventListener('click', () => selectMeetingCategory('Personal'));
    document.getElementById('meetingTypeBusiness').addEventListener('click', () => selectMeetingCategory('Business'));
    document.getElementById('meetingTypeLearning').addEventListener('click', () => selectMeetingCategory('Learning'));
    document.getElementById('startSessionBtn').addEventListener('click', startCallBarSession);
    document.getElementById('scheduleMeetingBtn').addEventListener('click', () => {
        const quickValue = document.getElementById('quickCallNumber').value.trim();
        openMeetingModal();
        if (quickValue && quickValue.includes('@')) {
            document.getElementById('meetingAttendees').value = quickValue;
        }
    });
    document.getElementById('toggleMuteBtn').addEventListener('click', toggleMute);
    document.getElementById('toggleCameraBtn').addEventListener('click', toggleCamera);

    document.addEventListener('keydown', handleShortcutKeys);

    // Call Modal
    const callModal = document.getElementById('callModal');
    const closeCallBtn = document.querySelector('#callModal .close');
    const callForm = document.getElementById('callForm');

    closeCallBtn.addEventListener('click', () => {
        callModal.style.display = 'none';
    });

    callForm.addEventListener('submit', addCall);

    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === activityModal) activityModal.style.display = 'none';
        if (e.target === meetingModal) meetingModal.style.display = 'none';
        if (e.target === callModal) callModal.style.display = 'none';
        if (e.target === document.getElementById('quickCallModal')) closeQuickCallModal();
    });
}

function closeMeetingModal() {
    const meetingModal = document.getElementById('meetingModal');
    meetingModal.style.display = 'none';
}

function openMeetingModal() {
    const meetingModal = document.getElementById('meetingModal');
    const form = document.getElementById('meetingForm');
    loadData();
    form.reset();
    document.getElementById('meetingDate').value = getDate();
    document.getElementById('meetingChannel').value = currentMeetingChannel;
    document.getElementById('meetingCategory').value = currentMeetingCategory;
    document.getElementById('approveMeeting').checked = false;
    document.getElementById('meetingTitle').value = '';
    document.getElementById('meetingAttendees').value = '';
    document.getElementById('meetingDescription').value = '';
    meetingModal.style.display = 'block';
}

function closeCallModal() {
    document.getElementById('callModal').style.display = 'none';
}

function selectCallChannel(channel) {
    currentMeetingChannel = channel;
    document.getElementById('channelPhoneBtn').classList.toggle('selected', channel === 'phone');
    document.getElementById('channelPhoneBtn').setAttribute('aria-pressed', channel === 'phone');
    document.getElementById('channelVideoBtn').classList.toggle('selected', channel === 'video');
    document.getElementById('channelVideoBtn').setAttribute('aria-pressed', channel === 'video');

    const input = document.getElementById('quickCallNumber');
    if (channel === 'phone') {
        input.placeholder = 'Enter phone number';
    } else if (channel === 'video') {
        input.placeholder = 'Enter meeting room or invitee email';
    } else {
        input.placeholder = 'Enter quick note or contact';
    }
}

function selectMeetingCategory(category) {
    currentMeetingCategory = category;
    document.getElementById('meetingTypePersonal').classList.toggle('selected', category === 'Personal');
    document.getElementById('meetingTypeBusiness').classList.toggle('selected', category === 'Business');
    document.getElementById('meetingTypeLearning').classList.toggle('selected', category === 'Learning');
    document.getElementById('meetingCategory').value = category;
}

function startCallBarSession() {
    const quickValue = document.getElementById('quickCallNumber').value.trim();

    if (currentMeetingChannel === 'phone') {
        if (!quickValue) {
            showToastNotification('Please enter a phone number to start a call.', 'warning');
            return;
        }
        makeQuickCallByPhone(quickValue);
        return;
    }

    const meetingModal = document.getElementById('meetingModal');
    document.getElementById('meetingChannel').value = currentMeetingChannel;
    document.getElementById('meetingCategory').value = currentMeetingCategory;

    if (quickValue) {
        const meetingTitleInput = document.getElementById('meetingTitle');
        const meetingAttendeesInput = document.getElementById('meetingAttendees');
        meetingTitleInput.value = currentMeetingChannel === 'video' ? `Video session with ${quickValue}` : `Quick meeting with ${quickValue}`;
        if (quickValue.includes('@')) {
            meetingAttendeesInput.value = quickValue;
        }
    }

    meetingModal.style.display = 'block';
    showToastNotification('Preparing meeting details. Fill in the meeting form and submit.', 'info');
}

function toggleMute() {
    callMuted = !callMuted;
    const btn = document.getElementById('toggleMuteBtn');
    btn.textContent = callMuted ? '🔇' : '🎙';
    btn.setAttribute('aria-pressed', callMuted);
    showToastNotification(callMuted ? 'Microphone muted' : 'Microphone unmuted', 'info');
}

function toggleCamera() {
    cameraActive = !cameraActive;
    const btn = document.getElementById('toggleCameraBtn');
    btn.textContent = cameraActive ? '📷' : '🚫';
    btn.setAttribute('aria-pressed', cameraActive);
    showToastNotification(cameraActive ? 'Camera enabled' : 'Camera disabled', 'info');
}

function joinMeeting(id) {
    const date = getDate();
    const meeting = meetings[date].find(m => m.id === id);
    if (!meeting) {
        showToastNotification('Meeting not found', 'error');
        return;
    }
    if (meeting.link) {
        window.open(meeting.link, '_blank');
        showToastNotification('Opening meeting link...', 'info');
    } else {
        showToastNotification('No meeting link available. Please edit details.', 'warning');
    }
}

function toggleMeetingStatus(id) {
    const date = getDate();
    const meeting = meetings[date].find(m => m.id === id);
    if (!meeting) return;
    meeting.completed = !meeting.completed;
    renderMeetings();
    renderSchedule();
    updateProgress();
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
document.getElementById('progressLabel').textContent = t('progressLabel');
        document.getElementById('plansTitle').textContent = t('plansTitle');
        document.getElementById('actionsTitle').textContent = t('actionsTitle');
        document.getElementById('addMeetingBtn').textContent = t('addMeetingBtn');
        document.getElementById('addActivityBtn').textContent = t('addActivityBtn');
        document.getElementById('meetingsBoxTitle').textContent = t('meetingsBoxTitle');
        document.getElementById('thDone').textContent = t('thDone');
        document.getElementById('thActivity').textContent = t('thActivity');
        document.getElementById('thTime').textContent = t('thTime');
        document.getElementById('thCategory').textContent = t('thCategory');
        document.getElementById('thActions').textContent = t('thActions');
        document.getElementById('submitMeetingBtn').textContent = t('submitMeetingBtn');
        document.getElementById('labelMeetingDate').textContent = t('labelMeetingDate');
        document.getElementById('labelApproveMeeting').textContent = t('labelApproveMeeting');
        document.getElementById('labelMeetingTitle').textContent = t('labelMeetingTitle');
        document.getElementById('labelMeetingTime').textContent = t('labelMeetingTime');
        document.getElementById('labelMeetingDuration').textContent = t('labelMeetingDuration');
        document.getElementById('labelMeetingAttendees').textContent = t('labelMeetingAttendees');
        document.getElementById('labelMeetingType').textContent = t('labelMeetingType');
        document.getElementById('labelMeetingCategory').textContent = t('labelMeetingCategory');
        document.getElementById('labelMeetingDescription').textContent = t('labelMeetingDescription');
}

function getDate() {
    return document.getElementById('dateInput').value;
}

function loadData() {
    const date = getDate();
    if (!activities[date]) activities[date] = [];
    if (!meetings[date]) meetings[date] = [];
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
    renderActivityPlan();
    updateProgress();
}

function addMeeting(e) {
    e.preventDefault();
    const meetingDate = document.getElementById('meetingDate').value;
    const title = document.getElementById('meetingTitle').value.trim();
    const time = document.getElementById('meetingTime').value;
    const duration = document.getElementById('meetingDuration').value;
    const attendees = document.getElementById('meetingAttendees').value.trim();
    const channel = document.getElementById('meetingChannel').value;
    const category = document.getElementById('meetingCategory').value;
    const description = document.getElementById('meetingDescription').value.trim();
    const approved = document.getElementById('approveMeeting').checked;

    if (!meetingDate || !title || !time || !duration) {
        showToastNotification('Please complete date, title, time and duration before saving.', 'warning');
        return;
    }

    if (!meetings[meetingDate]) meetings[meetingDate] = [];

    meetings[meetingDate].push({
        id: Date.now(),
        date: meetingDate,
        title,
        time,
        duration,
        attendees,
        channel,
        typeTag: category,
        description,
        status: approved ? 'Approved' : 'Pending',
        completed: false,
        link: channel === 'video' ? 'https://meet.google.com/new' : ''
    });

    const notificationKey = approved ? 'meetingApproved' : 'meetingPending';
    showNotification(translations[currentLanguage][notificationKey] || 'Meeting saved', 'success');
    showToastNotification(`${approved ? 'Approved' : 'Saved as pending'}: ${title} on ${meetingDate} at ${time}`, 'success');

    if (attendees) {
        sendMeetingEmail(attendees, title, time, duration, channel, description, approved);
    }

    document.getElementById('meetingForm').reset();
    closeMeetingModal();
    if (meetingDate === getDate()) {
        updateUI();
    }
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
    const approvedMeetings = (meetings[date] || []).filter(meeting => meeting.status === 'Approved');
    count.textContent = approvedMeetings.length;

    if (approvedMeetings.length === 0) {
        list.innerHTML = '<div class="meeting-empty" style="color:#777; padding:20px; text-align:center;">No approved meetings yet.</div>';
        return;
    }

    approvedMeetings.forEach(meeting => {
        const channelIcon = meeting.channel === 'video' ? '🎥' : meeting.channel === 'phone' ? '📞' : meeting.channel === 'virtual' ? '🌐' : '📍';
        const statusLabel = meeting.completed ? 'Completed' : 'Upcoming';
        const div = document.createElement('div');
        div.className = `meeting-item ${meeting.completed ? 'meeting-completed' : ''}`;
        div.innerHTML = `
            <div class="meeting-top-row">
                <div class="meeting-time">${channelIcon} ${meeting.time}</div>
                <span class="meeting-tag ${meeting.typeTag.toLowerCase()}">${meeting.typeTag}</span>
            </div>
            <div class="meeting-title">${meeting.title}</div>
            <div class="meeting-meta">${meeting.attendees || 'No attendees specified'}</div>
            <div class="meeting-description">${meeting.description || ''}</div>
            <div class="meeting-status">${meeting.status}</div>
            <div class="item-actions">
                ${meeting.channel === 'video' ? `<button class="action-btn join-btn" onclick="joinMeeting(${meeting.id})">Join</button>` : ''}
                ${meeting.channel === 'phone' && meeting.attendees ? `<button class="action-btn call-btn" onclick="initiateCall('${meeting.attendees}')">☎ Call</button>` : ''}
                <button class="action-btn status-btn" onclick="toggleMeetingStatus(${meeting.id})">${meeting.completed ? 'Mark Upcoming' : 'Mark Done'}</button>
                <button class="action-btn delete-btn" onclick="deleteMeeting(${meeting.id})">🗑 Delete</button>
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
            details: `${meeting.typeTag || meeting.channel} · ${meeting.status}`,
            status: meeting.completed ? 'Completed' : meeting.status
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

function renderActivityPlan() {
    const date = getDate();
    const planList = document.getElementById('activityPlanList');
    planList.innerHTML = '';

    if (!activities[date] || activities[date].length === 0) {
        planList.innerHTML = '<div style="text-align: center; color: #a0b5ba; padding: 20px; font-size: 0.95rem;">No to-do items yet. Add one above!</div>';
        return;
    }

    activities[date].forEach(item => {
        const div = document.createElement('div');
        div.className = `activity-plan-item ${item.done ? 'completed' : ''}`;
        
        const span = document.createElement('span');
        span.className = 'activity-plan-text';
        span.textContent = `${item.time} - ${item.activity}`;
        
        const removeBtn = document.createElement('button');
        removeBtn.className = 'activity-plan-remove';
        removeBtn.textContent = '✕';
        removeBtn.addEventListener('click', () => deleteActivity(item.id));
        
        div.appendChild(span);
        div.appendChild(removeBtn);
        
        div.addEventListener('click', (e) => {
            if (e.target !== removeBtn) {
                toggleActivity(item.id);
            }
        });
        
        planList.appendChild(div);
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
        renderActivityPlan();
        updateProgress();
    }
}

function deleteActivity(id) {
    const date = getDate();
    activities[date] = activities[date].filter(a => a.id !== id);
    renderActivities();
    renderActivityPlan();
    updateProgress();
}

function deleteMeeting(id) {
    const date = getDate();
    meetings[date] = meetings[date].filter(m => m.id !== id);
    renderMeetings();
    renderSchedule();
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

function sendMeetingEmail(attendees, title, time = '', duration = '', channel = '', description = '') {
    if (attendees) {
        const subject = `Meeting confirmation: ${title}`;
        const body = `Hello,\n\nYou are invited to the meeting "${title}" scheduled for ${time}.\nDuration: ${duration} minutes\nMeeting channel: ${channel}\n\nDetails:\n${description}\n\nPlease confirm your attendance.`;
        window.location.href = `mailto:${attendees}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        showToastNotification('Opening email client for confirmation', 'info');
    } else {
        showToastNotification('No attendees specified for confirmation email', 'warning');
    }
}

function initiateCall(phone) {
    // This creates a tel: link that works on devices with calling capabilities
    window.location.href = `tel:${phone.replace(/\D/g, '')}`;
}

function updateProgress() {
    const date = getDate();
    const activityItems = activities[date] || [];
    const meetingItems = meetings[date] || [];

    const completedActivities = activityItems.filter(a => a.done).length;
    const completedMeetings = meetingItems.filter(m => m.completed).length;
    const weightedActivities = activityItems.length;
    const weightedMeetings = meetingItems.reduce((sum, meeting) => {
        const weight = meeting.typeTag === 'Business' ? 2 : 1;
        return sum + weight;
    }, 0);

    const totalWeight = weightedActivities + weightedMeetings;
    const completedWeight = completedActivities + meetingItems.reduce((sum, meeting) => {
        if (meeting.completed) {
            return sum + (meeting.typeTag === 'Business' ? 2 : 1);
        }
        return sum;
    }, 0);
    const percent = totalWeight === 0 ? 0 : Math.round((completedWeight / totalWeight) * 100);

    document.getElementById('progressFill').style.width = percent + '%';
    document.getElementById('progressPercent').textContent = percent + '%';

    if (document.getElementById('trackerPending')) {
        document.getElementById('trackerPending').textContent = totalWeight - completedWeight;
        document.getElementById('trackerCompleted').textContent = completedWeight;
        const now = new Date().toISOString().substr(11, 5);
        const overdueCount = activityItems.filter(a => a.time && a.time < now && !a.done).length +
            meetingItems.filter(m => m.time && m.time < now && !m.completed).length;
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
    renderActivityPlan();
    renderMeetings();
    renderCalls();
    renderSchedule();
    updateProgress();
}
