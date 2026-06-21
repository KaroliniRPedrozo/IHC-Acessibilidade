/* ============================================================
   AgendaSaúde — Motor i18n + Fluxo SPA
   IHC — UFSC Campus Araranguá
   Dados 100% mockados. Sem backend.
============================================================ */

'use strict';

// ============================================================
// DICIONÁRIO DE TRADUÇÕES (i18n)
// Todas as strings da interface — zero hardcoded no HTML
// ============================================================
const TRANSLATIONS = {
  pt: {
    // Globais
    'page.title':       'AgendaSaúde — Agendamento de Consulta',
    'brand.name':       'AgendaSaúde',
    'skip.link':        'Ir para o conteúdo principal',
    'footer.text':      'Sistema de Agendamento — Dados fictícios para fins acadêmicos.',
    'btn.next':         'Continuar',
    'btn.back':         'Voltar',
    'btn.confirm':      'Confirmar agendamento',
    'theme.dark':       'Modo escuro',
    'theme.light':      'Modo claro',

    // Stepper
    'step.1': 'Unidade',
    'step.2': 'Especialidade',
    'step.3': 'Data e Hora',
    'step.4': 'Dados',
    'step.5': 'Confirmação',

    // Etapa 1
    'step1.title':              'Selecione a unidade de saúde',
    'step1.desc':               'Escolha a UPA ou posto de saúde mais próximo de você.',
    'step1.search.label':       'Buscar por bairro ou CEP',
    'step1.search.placeholder': 'Ex: Centro, Jardim, 88000-000',
    'step1.search.hint':        'Digite ao menos 2 caracteres para filtrar.',
    'error.select.unit':        'Selecione uma unidade para continuar.',
    'unit.selected':            'Selecionada',
    'unit.km':                  'km de distância',

    // Etapa 2
    'step2.title':          'Escolha a especialidade',
    'step2.desc':           'Selecione a especialidade médica que deseja.',
    'step2.legend':         'Especialidades disponíveis',
    'error.select.specialty': 'Selecione uma especialidade para continuar.',
    'specialty.selected':   'Selecionada',

    // Etapa 3
    'step3.title':         'Escolha data e horário',
    'step3.desc':          'Selecione primeiro uma data disponível e depois um horário.',
    'step3.times.title':   'Horários disponíveis',
    'step3.times.legend':  'Selecione um horário',
    'calendar.prev':       'Mês anterior',
    'calendar.next':       'Próximo mês',
    'error.select.datetime': 'Selecione uma data e um horário para continuar.',
    'time.available':      'Disponível',
    'time.unavailable':    'Ocupado',
    'day.available.aria':  'disponível',
    'day.unavailable.aria':'sem vagas',
    'selected.date.label': 'Horários para',

    // Etapa 4
    'step4.title':              'Seus dados',
    'step4.desc':               'Informe seus dados para registrar o agendamento.',
    'form.name.label':          'Nome completo',
    'form.name.placeholder':    'Ex: Maria da Silva',
    'form.cpf.label':           'CPF',
    'form.cpf.placeholder':     '000.000.000-00',
    'form.cpf.hint':            'Digite apenas os números — a máscara é aplicada automaticamente.',
    'form.birth.label':         'Data de nascimento',
    'form.phone.label':         'Telefone',
    'form.phone.placeholder':   '(00) 00000-0000',
    'form.email.label':         'E-mail',
    'form.email.placeholder':   'exemplo@email.com',
    'form.required':            '(obrigatório)',
    'form.optional':            '(opcional)',
    'form.required.note':       'Campos obrigatórios',
    'error.name.required':      'Informe seu nome completo.',
    'error.name.short':         'O nome deve ter ao menos 3 caracteres.',
    'error.cpf.required':       'Informe seu CPF.',
    'error.cpf.invalid':        'CPF inválido — verifique os dígitos informados.',
    'error.birth.required':     'Informe sua data de nascimento.',
    'error.birth.future':       'A data de nascimento não pode ser no futuro.',
    'error.phone.required':     'Informe seu telefone.',
    'error.phone.invalid':      'Telefone inválido — verifique o número informado.',
    'error.email.invalid':      'E-mail inválido — verifique o endereço informado.',

    // Etapa 5 — Revisão
    'step5.review.title': 'Revise seu agendamento',
    'step5.review.desc':  'Confirme as informações antes de finalizar.',
    'review.unit':        'Unidade de saúde',
    'review.specialty':   'Especialidade',
    'review.date':        'Data',
    'review.time':        'Horário',
    'review.name':        'Nome',
    'review.cpf':         'CPF',
    'review.birth':       'Data de nascimento',
    'review.phone':       'Telefone',

    // Comprovante
    'receipt.title':            'Agendamento confirmado!',
    'receipt.subtitle':         'Seu atendimento está agendado com sucesso.',
    'receipt.protocol.label':   'Número do protocolo',
    'receipt.copy.btn':         'Copiar protocolo',
    'receipt.copy.aria':        'Copiar número do protocolo',
    'receipt.copy.success':     'Protocolo copiado!',
    'receipt.print.btn':        'Imprimir comprovante',
    'receipt.new.btn':          'Novo agendamento',
    'receipt.instructions.title': 'Próximos passos',
    'receipt.instructions.1':   'Chegue com 15 minutos de antecedência.',
    'receipt.instructions.2':   'Leve um documento com foto e o cartão SUS.',
    'receipt.instructions.3':   'Você receberá uma confirmação no telefone informado.',
    'receipt.confirmed.announce': 'Agendamento confirmado com sucesso!',

    // Calendário
    'months': 'Janeiro,Fevereiro,Março,Abril,Maio,Junho,Julho,Agosto,Setembro,Outubro,Novembro,Dezembro',
    'weekdays.short': 'Dom,Seg,Ter,Qua,Qui,Sex,Sáb',
  },
  en: {
    // Globals
    'page.title':       'HealthScheduler — Appointment Booking',
    'brand.name':       'HealthScheduler',
    'skip.link':        'Skip to main content',
    'footer.text':      'Scheduling System — Fictional data for academic purposes.',
    'btn.next':         'Continue',
    'btn.back':         'Back',
    'btn.confirm':      'Confirm appointment',
    'theme.dark':       'Dark mode',
    'theme.light':      'Light mode',

    // Stepper
    'step.1': 'Location',
    'step.2': 'Specialty',
    'step.3': 'Date & Time',
    'step.4': 'Details',
    'step.5': 'Confirm',

    // Step 1
    'step1.title':              'Select a health unit',
    'step1.desc':               'Choose the UPA or health center closest to you.',
    'step1.search.label':       'Search by neighborhood or ZIP code',
    'step1.search.placeholder': 'E.g.: Downtown, Riverside, 88000-000',
    'step1.search.hint':        'Type at least 2 characters to filter.',
    'error.select.unit':        'Please select a health unit to continue.',
    'unit.selected':            'Selected',
    'unit.km':                  'km away',

    // Step 2
    'step2.title':            'Choose a specialty',
    'step2.desc':             'Select the medical specialty you need.',
    'step2.legend':           'Available specialties',
    'error.select.specialty': 'Please select a specialty to continue.',
    'specialty.selected':     'Selected',

    // Step 3
    'step3.title':         'Choose date and time',
    'step3.desc':          'First select an available date, then a time slot.',
    'step3.times.title':   'Available times',
    'step3.times.legend':  'Select a time slot',
    'calendar.prev':       'Previous month',
    'calendar.next':       'Next month',
    'error.select.datetime': 'Please select a date and time to continue.',
    'time.available':      'Available',
    'time.unavailable':    'Unavailable',
    'day.available.aria':  'available',
    'day.unavailable.aria':'no slots',
    'selected.date.label': 'Times for',

    // Step 4
    'step4.title':              'Your information',
    'step4.desc':               'Enter your details to register the appointment.',
    'form.name.label':          'Full name',
    'form.name.placeholder':    'E.g.: Maria da Silva',
    'form.cpf.label':           'CPF (Brazilian ID)',
    'form.cpf.placeholder':     '000.000.000-00',
    'form.cpf.hint':            'Type numbers only — the mask is applied automatically.',
    'form.birth.label':         'Date of birth',
    'form.phone.label':         'Phone number',
    'form.phone.placeholder':   '(00) 00000-0000',
    'form.email.label':         'Email address',
    'form.email.placeholder':   'example@email.com',
    'form.required':            '(required)',
    'form.optional':            '(optional)',
    'form.required.note':       'Required fields',
    'error.name.required':      'Please enter your full name.',
    'error.name.short':         'Name must be at least 3 characters.',
    'error.cpf.required':       'Please enter your CPF.',
    'error.cpf.invalid':        'Invalid CPF — please check the digits entered.',
    'error.birth.required':     'Please enter your date of birth.',
    'error.birth.future':       'Date of birth cannot be in the future.',
    'error.phone.required':     'Please enter your phone number.',
    'error.phone.invalid':      'Invalid phone number — please check the number entered.',
    'error.email.invalid':      'Invalid email address — please check the address entered.',

    // Step 5 — Review
    'step5.review.title': 'Review your appointment',
    'step5.review.desc':  'Please confirm your information before finalizing.',
    'review.unit':        'Health unit',
    'review.specialty':   'Specialty',
    'review.date':        'Date',
    'review.time':        'Time',
    'review.name':        'Name',
    'review.cpf':         'CPF',
    'review.birth':       'Date of birth',
    'review.phone':       'Phone',

    // Receipt
    'receipt.title':            'Appointment confirmed!',
    'receipt.subtitle':         'Your appointment has been successfully scheduled.',
    'receipt.protocol.label':   'Protocol number',
    'receipt.copy.btn':         'Copy protocol',
    'receipt.copy.aria':        'Copy protocol number',
    'receipt.copy.success':     'Protocol copied!',
    'receipt.print.btn':        'Print receipt',
    'receipt.new.btn':          'New appointment',
    'receipt.instructions.title': 'Next steps',
    'receipt.instructions.1':   'Arrive 15 minutes before your appointment.',
    'receipt.instructions.2':   'Bring a photo ID and your SUS card.',
    'receipt.instructions.3':   'You will receive a confirmation on the phone provided.',
    'receipt.confirmed.announce': 'Appointment successfully confirmed!',

    // Calendar
    'months': 'January,February,March,April,May,June,July,August,September,October,November,December',
    'weekdays.short': 'Sun,Mon,Tue,Wed,Thu,Fri,Sat',
  },
  
  es:{
    'page.title':       'AgendaSalud — Programación de Citas',
    'brand.name':       'AgendaSalud',
    'skip.link':        'Saltar al contenido principal',
    'footer.text':      'Sistema de Programación — Datos ficticios con fines académicos.',
    'btn.next':         'Continuar',
    'btn.back':         'Volver',
    'btn.confirm':      'Confirmar cita',
    'theme.dark':       'Modo oscuro',
    'theme.light':      'Modo claro',

    'step.1': 'Unidad', 'step.2': 'Especialidad', 'step.3': 'Fecha y Hora', 'step.4': 'Datos', 'step.5': 'Confirmación',
    
    'step1.title':              'Seleccione la unidad de salud',
    'step1.desc':               'Elija la UPA o centro de salud más cercano.',
    'step1.search.label':       'Buscar por barrio o código postal',
    'step1.search.placeholder': 'Ej: Centro, Jardín, 88000-000',
    'step1.search.hint':        'Escriba al menos 2 caracteres para filtrar.',
    'error.select.unit':        'Seleccione una unidad para continuar.',
    'unit.selected':            'Seleccionada',
    'unit.km':                  'km de distancia',

    'step2.title':            'Elija la especialidad',
    'step2.desc':             'Seleccione la especialidad médica que necesita.',
    'step2.legend':           'Especialidades disponibles',
    'error.select.specialty': 'Seleccione una especialidad para continuar.',
    'specialty.selected':     'Seleccionada',

    'step3.title':         'Elija fecha y hora',
    'step3.desc':          'Primero seleccione una fecha disponible y luego un horario.',
    'step3.times.title':   'Horarios disponibles',
    'step3.times.legend':  'Seleccione un horario',
    'calendar.prev':       'Mes anterior',
    'calendar.next':       'Próximo mes',
    'error.select.datetime': 'Seleccione una fecha y hora para continuar.',
    'time.available':      'Disponible',
    'time.unavailable':    'Ocupado',
    'day.available.aria':  'disponible',
    'day.unavailable.aria':'sin turnos',
    'selected.date.label': 'Horarios para',

    'step4.title':              'Sus datos',
    'step4.desc':               'Ingrese sus datos para registrar la cita.',
    'form.name.label':          'Nombre completo',
    'form.name.placeholder':    'Ej: Maria da Silva',
    'form.cpf.label':           'CPF',
    'form.cpf.placeholder':     '000.000.000-00',
    'form.cpf.hint':            'Escriba solo números — la máscara se aplica automáticamente.',
    'form.birth.label':         'Fecha de nacimiento',
    'form.phone.label':         'Teléfono',
    'form.phone.placeholder':   '(00) 00000-0000',
    'form.email.label':         'Correo electrónico',
    'form.email.placeholder':   'ejemplo@email.com',
    'form.required':            '(obligatorio)',
    'form.optional':            '(opcional)',
    'form.required.note':       'Campos obligatorios',
    'error.name.required':      'Ingrese su nombre completo.',
    'error.name.short':         'El nombre debe tener al menos 3 caracteres.',
    'error.cpf.required':       'Ingrese su CPF.',
    'error.cpf.invalid':        'CPF inválido — verifique los dígitos ingresados.',
    'error.birth.required':     'Ingrese su fecha de nacimiento.',
    'error.birth.future':       'La fecha de nacimiento no puede ser en el futuro.',
    'error.phone.required':     'Ingrese su teléfono.',
    'error.phone.invalid':      'Teléfono inválido — verifique el número ingresado.',
    'error.email.invalid':      'Correo inválido — verifique la dirección.',

    'step5.review.title': 'Revise su cita',
    'step5.review.desc':  'Confirme la información antes de finalizar.',
    'review.unit':        'Unidad de salud',
    'review.specialty':   'Especialidad',
    'review.date':        'Fecha',
    'review.time':        'Horario',
    'review.name':        'Nombre',
    'review.cpf':         'CPF',
    'review.birth':       'Fecha de nacimiento',
    'review.phone':       'Teléfono',

    'receipt.title':            '¡Cita confirmada!',
    'receipt.subtitle':         'Su atención ha sido programada con éxito.',
    'receipt.protocol.label':   'Número de protocolo',
    'receipt.copy.btn':         'Copiar protocolo',
    'receipt.copy.aria':        'Copiar número de protocolo',
    'receipt.copy.success':     '¡Protocolo copiado!',
    'receipt.print.btn':        'Imprimir comprobante',
    'receipt.new.btn':          'Nueva cita',
    'receipt.instructions.title': 'Próximos pasos',
    'receipt.instructions.1':   'Llegue con 15 minutos de anticipación.',
    'receipt.instructions.2':   'Lleve un documento con foto y su tarjeta SUS.',
    'receipt.instructions.3':   'Recibirá una confirmación en el teléfono proporcionado.',
    'receipt.confirmed.announce': '¡Cita confirmada con éxito!',

    'months': 'Enero,Febrero,Marzo,Abril,Mayo,Junio,Julio,Agosto,Septiembre,Octubre,Noviembre,Diciembre',
    'weekdays.short': 'Dom,Lun,Mar,Mié,Jue,Vie,Sáb',
  }
};

// ============================================================
// DADOS MOCKADOS
// ============================================================
const MOCK_UNITS = [
  { id: 'upa-centro',   name: 'UPA 24h Centro',          address: 'Rua XV de Novembro, 300 — Centro', distance: 1.2 },
  { id: 'ups-jardim',   name: 'UPS Jardim das Flores',   address: 'Av. das Palmeiras, 840 — Jardim',  distance: 3.5 },
  { id: 'upa-norte',    name: 'UPA Norte — Araranguá',   address: 'Rua das Acácias, 120 — Bairro Norte', distance: 4.8 },
  { id: 'post-litoral', name: 'Posto de Saúde Litoral',  address: 'Estrada do Mar, 670 — Balneário',  distance: 6.1 },
  { id: 'post-sul',     name: 'Posto de Saúde Sul',      address: 'Rua Esperança, 55 — Bairro Sul',   distance: 7.3 },
];

const MOCK_SPECIALTIES = [
  { id: 'clinico',      labelPt: 'Clínico Geral',     labelEn: 'General Practitioner', icon: '🩺' },
  { id: 'pediatria',    labelPt: 'Pediatria',          labelEn: 'Pediatrics',           icon: '👶' },
  { id: 'cardiologia',  labelPt: 'Cardiologia',        labelEn: 'Cardiology',           icon: '❤️' },
  { id: 'ortopedia',    labelPt: 'Ortopedia',          labelEn: 'Orthopedics',          icon: '🦴' },
  { id: 'ginecologia',  labelPt: 'Ginecologia',        labelEn: 'Gynecology',           icon: '🌸' },
  { id: 'neurologia',   labelPt: 'Neurologia',         labelEn: 'Neurology',            icon: '🧠' },
];

// Horários mockados: true = disponível, false = ocupado
const MOCK_TIME_SLOTS = {
  available: ['07:30','08:00','08:30','09:30','10:00','11:00','14:00','14:30','15:30','16:00'],
  unavailable: ['08:30', '10:30', '11:30', '13:00', '13:30'],
};

// Dias sem vagas no mês atual (índices de dia do mês)
const UNAVAILABLE_DAYS = [3, 7, 14, 20, 21, 27, 28];

// ============================================================
// ESTADO GLOBAL DA APLICAÇÃO
// ============================================================
const state = {
  currentStep: 1,
  lang: 'pt',
  audioEnabled: false,
  selectedUnit: null,
  selectedSpecialty: null,
  selectedDate: null,
  selectedTime: null,
  calendarMonth: new Date().getMonth(),
  calendarYear: new Date().getFullYear(),
  patientData: {},
  protocolNumber: null,
};

// ============================================================
// MOTOR i18n
// ============================================================
function t(key) {
  return TRANSLATIONS[state.lang][key] || TRANSLATIONS['pt'][key] || key;
}

function setLanguage(lang) {
  if (lang === state.lang) return;
  state.lang = lang;

  // Atualiza atributo lang do documento (WCAG 3.1.1)
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  document.title = t('page.title');

  // Atualiza botões de idioma
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const isActive = btn.dataset.lang === lang;
    btn.classList.toggle('lang-btn--active', isActive);
    btn.setAttribute('aria-pressed', String(isActive));
    // Atualiza texto de leitura para leitores de tela
    const srSpan = btn.querySelector('.sr-only');
    if (srSpan) {
      if (lang === 'pt') {
        srSpan.textContent = btn.dataset.lang === 'pt' ? ' — Português (ativo)' : ' — English';
      } else {
        srSpan.textContent = btn.dataset.lang === 'en' ? ' — English (active)' : ' — Português';
      }
    }
  });

  // Percorre todos os elementos com data-i18n e atualiza
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    el.textContent = t(key);
  });

  // Atualiza placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });

  // Atualiza aria-labels com chave i18n
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    el.setAttribute('aria-label', t(el.dataset.i18nAria));
  });

  // Atualiza label do botão de dark mode
  const isDarkMode = document.documentElement.classList.contains('dark-mode');
  const label = document.getElementById('dark-mode-label');
  const btn = document.getElementById('toggle-dark-mode');
  if (label) {
    const themeKey = isDarkMode ? 'theme.light' : 'theme.dark';
    label.textContent = t(themeKey);
  }
  if (btn) {
    const themeKey = isDarkMode ? 'theme.light' : 'theme.dark';
    btn.title = t(themeKey);
  }

  // Re-renderiza componentes dinâmicos
  renderUnitList(document.getElementById('search-unit').value);
  renderSpecialtyList();
  renderCalendar();
  if (state.selectedDate) renderTimeSlots(state.selectedDate);
  if (state.currentStep === 5) {
    const reviewEl = document.getElementById('review-list');
    if (reviewEl && !document.getElementById('receipt-view').hidden) {
      renderReview();
    }
  }

  // Anuncia mudança de idioma para leitores de tela
  announce(lang === 'pt' ? 'Idioma alterado para Português' : 'Language changed to English');
}

// ============================================================
// ANÚNCIO PARA LEITORES DE TELA
// ============================================================
function announce(message) {
  const region = document.getElementById('live-region');
  region.textContent = '';
  // Forçar re-render
  setTimeout(() => { 
    region.textContent = message; 
    
    // NOVO: Chama o motor de voz passando a mensagem
    speakText(message);
  }, 50);
}

// ============================================================
// NAVEGAÇÃO ENTRE ETAPAS
// ============================================================
function goToStep(targetStep) {
  // Valida a etapa atual antes de avançar
  if (targetStep > state.currentStep) {
    if (!validateStep(state.currentStep)) return;
  }

  // Esconde etapa atual
  const currentEl = document.getElementById(`step-${state.currentStep}`);
  if (currentEl) {
    currentEl.hidden = true;
    currentEl.classList.remove('step--active');
  }

  // Atualiza estado
  state.currentStep = targetStep;

  /// Mostra nova etapa
  const nextEl = document.getElementById(`step-${targetStep}`);
  if (nextEl) {
    nextEl.hidden = false;
    nextEl.classList.add('step--active');

    // MUDANÇA PARA O 10: Foca diretamente no título da etapa
    const stepTitle = nextEl.querySelector('h1');
    if (stepTitle) {
      stepTitle.setAttribute('tabindex', '-1'); // Permite que o h1 receba foco via JS
      stepTitle.focus();
    }
  }

  // Ações especiais ao entrar em cada etapa
  if (targetStep === 3) renderCalendar();
  if (targetStep === 5) renderReview();

  // Atualiza stepper visual
  updateStepper(targetStep);

  // Anuncia etapa para leitores de tela
  const stepTitles = {
    1: t('step1.title'),
    2: t('step2.title'),
    3: t('step3.title'),
    4: t('step4.title'),
    5: t('step5.review.title'),
  };
  announce(`Etapa ${targetStep} de 5: ${stepTitles[targetStep]}`);

  // Scroll suave ao topo
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateStepper(activeStep) {
  document.querySelectorAll('.stepper-item').forEach(item => {
    const step = parseInt(item.dataset.step);
    item.classList.remove('stepper-item--active', 'stepper-item--done');
    if (step === activeStep) {
      item.classList.add('stepper-item--active');
      item.setAttribute('aria-current', 'step');
    } else {
      item.removeAttribute('aria-current');
      if (step < activeStep) item.classList.add('stepper-item--done');
    }
  });
}

// ============================================================
// VALIDAÇÕES POR ETAPA
// ============================================================
function validateStep(step) {
  switch (step) {
    case 1: return validateStep1();
    case 2: return validateStep2();
    case 3: return validateStep3();
    case 4: return validateStep4();
    default: return true;
  }
}

function showError(errorId) {
  const el = document.getElementById(errorId);
  if (el) {
    el.hidden = false;
    el.focus();
    setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 50);
  }
}

function hideError(errorId) {
  const el = document.getElementById(errorId);
  if (el) el.hidden = true;
}

function validateStep1() {
  if (!state.selectedUnit) {
    showError('step1-error');
    return false;
  }
  hideError('step1-error');
  return true;
}

function validateStep2() {
  if (!state.selectedSpecialty) {
    showError('step2-error');
    return false;
  }
  hideError('step2-error');
  return true;
}

function validateStep3() {
  if (!state.selectedDate || !state.selectedTime) {
    showError('step3-error');
    return false;
  }
  hideError('step3-error');
  return true;
}

function validateStep4() {
  let isValid = true;

  // Nome
  const name = document.getElementById('patient-name');
  if (!name.value.trim()) {
    setFieldError(name, 'name-error', t('error.name.required'));
    isValid = false;
  } else if (name.value.trim().length < 3) {
    setFieldError(name, 'name-error', t('error.name.short'));
    isValid = false;
  } else {
    clearFieldError(name, 'name-error');
  }

  // CPF
  const cpf = document.getElementById('patient-cpf');
  const cpfClean = cpf.value.replace(/\D/g, '');
  if (!cpfClean) {
    setFieldError(cpf, 'cpf-error', t('error.cpf.required'));
    isValid = false;
  } else if (!validateCPF(cpfClean)) {
    setFieldError(cpf, 'cpf-error', t('error.cpf.invalid'));
    isValid = false;
  } else {
    clearFieldError(cpf, 'cpf-error');
  }

  // Data de nascimento
  const birth = document.getElementById('patient-birth');
  if (!birth.value) {
    setFieldError(birth, 'birth-error', t('error.birth.required'));
    isValid = false;
  } else if (new Date(birth.value) > new Date()) {
    setFieldError(birth, 'birth-error', t('error.birth.future'));
    isValid = false;
  } else {
    clearFieldError(birth, 'birth-error');
  }

  // Telefone
  const phone = document.getElementById('patient-phone');
  const phoneClean = phone.value.replace(/\D/g, '');
  if (!phoneClean) {
    setFieldError(phone, 'phone-error', t('error.phone.required'));
    isValid = false;
  } else if (phoneClean.length < 10) {
    setFieldError(phone, 'phone-error', t('error.phone.invalid'));
    isValid = false;
  } else {
    clearFieldError(phone, 'phone-error');
  }

  // E-mail (opcional, mas se preenchido deve ser válido)
  const email = document.getElementById('patient-email');
  if (email.value.trim() && !isValidEmail(email.value)) {
    setFieldError(email, 'email-error', t('error.email.invalid'));
    isValid = false;
  } else {
    clearFieldError(email, 'email-error');
  }

  if (!isValid) {
    // Foca no primeiro campo com erro
    const firstError = document.querySelector('.text-input.is-invalid');
    if (firstError) firstError.focus();
  }

  return isValid;
}

function setFieldError(input, errorId, message) {
  input.classList.add('is-invalid');
  input.setAttribute('aria-invalid', 'true');
  const errorEl = document.getElementById(errorId);
  if (errorEl) {
    errorEl.textContent = message;
    errorEl.hidden = false;
  }
}

function clearFieldError(input, errorId) {
  input.classList.remove('is-invalid');
  input.setAttribute('aria-invalid', 'false');
  const errorEl = document.getElementById(errorId);
  if (errorEl) errorEl.hidden = true;
}

// ============================================================
// RENDERIZAÇÃO — ETAPA 1: Unidades
// ============================================================
function renderUnitList(filter = '') {
  const list = document.getElementById('unit-list');
  const filtered = filter.length >= 2
    ? MOCK_UNITS.filter(u =>
        u.name.toLowerCase().includes(filter.toLowerCase()) ||
        u.address.toLowerCase().includes(filter.toLowerCase())
      )
    : MOCK_UNITS;

  if (filtered.length === 0) {
    list.innerHTML = `<li style="padding:1rem;color:var(--color-text-muted)">Nenhuma unidade encontrada.</li>`;
    return;
  }

  list.innerHTML = filtered.map(unit => {
    const isSelected = state.selectedUnit?.id === unit.id;
    const selectedText = isSelected ? ` — ${t('unit.selected')}` : '';
    return `
      <li>
        <button
          class="unit-card${isSelected ? ' is-selected' : ''}"
          aria-pressed="${isSelected}"
          onclick="selectUnit('${unit.id}')"
          aria-label="${unit.name}, ${unit.address}, ${unit.distance} ${t('unit.km')}${selectedText}"
        >
          <span class="unit-card-icon" aria-hidden="true">🏥</span>
          <span class="unit-card-body">
            <span class="unit-card-name">${unit.name}</span>
            <span class="unit-card-address">${unit.address}</span>
            <span class="unit-card-distance">${unit.distance} ${t('unit.km')}</span>
          </span>
          <span class="unit-card-check" aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7l3.5 3.5L12 3" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
        </button>
      </li>
    `;
  }).join('');
}

function selectUnit(id) {
  state.selectedUnit = MOCK_UNITS.find(u => u.id === id) || null;
  hideError('step1-error');
  renderUnitList(document.getElementById('search-unit').value);
  announce(`${state.selectedUnit.name} ${t('unit.selected')}`);
}

// ============================================================
// RENDERIZAÇÃO — ETAPA 2: Especialidades
// ============================================================
function renderSpecialtyList() {
  const list = document.getElementById('specialty-list');
  if (!list) return;

  list.innerHTML = MOCK_SPECIALTIES.map(spec => {
    const label = state.lang === 'pt' ? spec.labelPt : spec.labelEn;
    const isSelected = state.selectedSpecialty?.id === spec.id;
    const selectedBadge = t('specialty.selected');
    return `
      <li>
        <button
          class="option-card${isSelected ? ' is-selected' : ''}"
          aria-pressed="${isSelected}"
          onclick="selectSpecialty('${spec.id}')"
          aria-label="${label}${isSelected ? ` — ${selectedBadge}` : ''}"
        >
          <span class="option-card-icon" aria-hidden="true">${spec.icon}</span>
          <span class="option-card-label">${label}</span>
          <span class="option-selected-badge" aria-hidden="true">${selectedBadge}</span>
        </button>
      </li>
    `;
  }).join('');
}

function selectSpecialty(id) {
  state.selectedSpecialty = MOCK_SPECIALTIES.find(s => s.id === id) || null;
  hideError('step2-error');
  renderSpecialtyList();
  const label = state.lang === 'pt' ? state.selectedSpecialty.labelPt : state.selectedSpecialty.labelEn;
  announce(`${label} ${t('specialty.selected')}`);
}

// ============================================================
// RENDERIZAÇÃO — ETAPA 3: Calendário
// ============================================================
function renderCalendar() {
  const grid = document.getElementById('calendar-grid');
  const monthLabel = document.getElementById('calendar-month-label');
  if (!grid || !monthLabel) return;

  const months = t('months').split(',');
  const weekdays = t('weekdays.short').split(',');
  const year = state.calendarYear;
  const month = state.calendarMonth;

  monthLabel.textContent = `${months[month]} ${year}`;

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = new Date();

  // Cabeçalho dos dias da semana
  const headers = weekdays.map(d =>
    `<div class="calendar-day-header" role="columnheader" aria-label="${d}">${d}</div>`
  ).join('');

  // Células vazias no início
  const blanks = Array.from({ length: firstDay }, () =>
    `<div role="gridcell" aria-hidden="true"></div>`
  ).join('');

  const dayCells = Array.from({ length: daysInMonth }, (_, i) => {
    const day = i + 1;
    const date = new Date(year, month, day);
    const isPast = date < new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const isUnavailable = UNAVAILABLE_DAYS.includes(day);
    const disabled = isPast || isUnavailable;

    const dateStr = `${year}-${String(month + 1).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
    const isSelected = state.selectedDate === dateStr;

    const availableText = disabled ? t('day.unavailable.aria') : t('day.available.aria');
    const dot = !disabled ? `<span class="day-dot" aria-hidden="true"></span>` : '';

    // Formato de data legível para aria-label
    const dateForAria = state.lang === 'pt'
      ? date.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' })
      : date.toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long' });

    return `
      <div role="gridcell">
        <button
          class="calendar-day${isSelected ? ' is-selected' : ''}"
          ${disabled ? 'aria-disabled="true"' : ''}
          ${isSelected ? 'aria-pressed="true"' : 'aria-pressed="false"'}
          aria-label="${dateForAria}${disabled ? '' : ' — ' + availableText}"
          ${disabled ? '' : `onclick="selectDate('${dateStr}')"`}
          ${disabled ? 'tabindex="-1"' : ''}
        >
          ${day}
          ${dot}
        </button>
      </div>
    `;
  }).join('');

  grid.innerHTML = headers + blanks + dayCells;
}

function changeMonth(delta) {
  state.calendarMonth += delta;
  if (state.calendarMonth > 11) { state.calendarMonth = 0; state.calendarYear++; }
  if (state.calendarMonth < 0)  { state.calendarMonth = 11; state.calendarYear--; }
  state.selectedDate = null;
  state.selectedTime = null;
  document.getElementById('time-slots-section').hidden = true;
  renderCalendar();
}

function selectDate(dateStr) {
  state.selectedDate = dateStr;
  state.selectedTime = null;
  renderCalendar();
  renderTimeSlots(dateStr);
  hideError('step3-error');

  const timesSection = document.getElementById('time-slots-section');
  timesSection.hidden = false;
  setTimeout(() => timesSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 50);
}

function renderTimeSlots(dateStr) {
  const list = document.getElementById('time-list');
  const dateLabel = document.getElementById('selected-date-label');
  if (!list) return;

  const date = new Date(dateStr + 'T12:00:00');
  const formatted = state.lang === 'pt'
    ? date.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' })
    : date.toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long' });

  dateLabel.textContent = `${t('selected.date.label')} ${formatted}`;

  // Mescla os dois arrays para gerar a grade de horários
  const allSlots = [
    ...MOCK_TIME_SLOTS.available.map(time => ({ time, available: true })),
    ...MOCK_TIME_SLOTS.unavailable.map(time => ({ time, available: false })),
  ].sort((a, b) => a.time.localeCompare(b.time));

  list.innerHTML = allSlots.map(slot => {
    const isSelected = state.selectedTime === slot.time;
    const statusText = slot.available ? t('time.available') : t('time.unavailable');
    const ariaLabel = `${slot.time} — ${statusText}${isSelected ? ' — Selecionado' : ''}`;
    return `
      <li>
        <button
          class="time-btn${isSelected ? ' is-selected' : ''}"
          ${!slot.available ? 'aria-disabled="true"' : ''}
          ${isSelected ? 'aria-pressed="true"' : 'aria-pressed="false"'}
          aria-label="${ariaLabel}"
          ${slot.available ? `onclick="selectTime('${slot.time}')"` : 'tabindex="-1"'}
        >
          <span>${slot.time}</span>
          <span class="time-status-text">${slot.available ? '' : statusText}</span>
        </button>
      </li>
    `;
  }).join('');
}

function selectTime(time) {
  state.selectedTime = time;
  renderTimeSlots(state.selectedDate);
  hideError('step3-error');
  announce(`${time} ${t('time.available')}`);
}

// ============================================================
// RENDERIZAÇÃO — ETAPA 5: Revisão
// ============================================================
function renderReview() {
  const reviewList = document.getElementById('review-list');
  if (!reviewList) return;

  const date = state.selectedDate
    ? (() => {
        const d = new Date(state.selectedDate + 'T12:00:00');
        return state.lang === 'pt'
          ? d.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
          : d.toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
      })()
    : '—';

  const specialtyLabel = state.selectedSpecialty
    ? (state.lang === 'pt' ? state.selectedSpecialty.labelPt : state.selectedSpecialty.labelEn)
    : '—';

  const patientName  = document.getElementById('patient-name')?.value  || '—';
  const patientCPF   = document.getElementById('patient-cpf')?.value   || '—';
  const patientBirth = (() => {
    const v = document.getElementById('patient-birth')?.value;
    if (!v) return '—';
    const d = new Date(v + 'T12:00:00');
    return state.lang === 'pt'
      ? d.toLocaleDateString('pt-BR')
      : d.toLocaleDateString('en-US');
  })();
  const patientPhone = document.getElementById('patient-phone')?.value || '—';

  const rows = [
    [t('review.unit'),      state.selectedUnit?.name || '—'],
    [t('review.specialty'), specialtyLabel],
    [t('review.date'),      date],
    [t('review.time'),      state.selectedTime || '—'],
    [t('review.name'),      patientName],
    [t('review.cpf'),       patientCPF],
    [t('review.birth'),     patientBirth],
    [t('review.phone'),     patientPhone],
  ];

  reviewList.innerHTML = rows.map(([label, value]) =>
    `<dt>${label}</dt><dd>${value}</dd>`
  ).join('');
}

// ============================================================
// CONFIRMAÇÃO DO AGENDAMENTO
// ============================================================
function confirmBooking() {
  // Gera protocolo único
  const now = Date.now().toString(36).toUpperCase();
  state.protocolNumber = `AGS-${now}-${Math.floor(Math.random() * 9000 + 1000)}`;

  // Mostra comprovante
  document.getElementById('review-view').hidden = true;
  document.getElementById('receipt-view').hidden = false;

  // Preenche protocolo
  document.getElementById('protocol-number').textContent = state.protocolNumber;

  // Preenche resumo no comprovante
  const receiptSummary = document.getElementById('receipt-summary');
  if (receiptSummary) {
    document.getElementById('review-list').innerHTML; // já populado
    receiptSummary.innerHTML = document.getElementById('review-list').innerHTML;
  }

  // Traduz instruções
  const instrItems = document.querySelectorAll('.instructions-list li');
  instrItems.forEach((li, i) => {
    li.textContent = t(`receipt.instructions.${i + 1}`);
  });

  // Anuncia sucesso para leitores de tela (aria-live=assertive)
  setTimeout(() => {
    announce(t('receipt.confirmed.announce'));
  }, 100);

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function copyProtocol() {
  if (!state.protocolNumber) return;
  navigator.clipboard.writeText(state.protocolNumber).then(() => {
    const btn = document.getElementById('copy-btn');
    const originalText = btn.querySelector('[data-i18n="receipt.copy.btn"]');
    if (originalText) originalText.textContent = t('receipt.copy.success');
    announce(t('receipt.copy.success'));
    setTimeout(() => {
      if (originalText) originalText.textContent = t('receipt.copy.btn');
    }, 2500);
  }).catch(() => {
    // Fallback para navegadores sem suporte
    const el = document.createElement('textarea');
    el.value = state.protocolNumber;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    announce(t('receipt.copy.success'));
  });
}

// ============================================================
// REINICIAR FLUXO
// ============================================================
function resetFlow() {
  state.selectedUnit     = null;
  state.selectedSpecialty = null;
  state.selectedDate     = null;
  state.selectedTime     = null;
  state.patientData      = {};
  state.protocolNumber   = null;
  state.calendarMonth    = new Date().getMonth();
  state.calendarYear     = new Date().getFullYear();

  // Limpa formulário
  const form = document.getElementById('patient-form');
  if (form) form.reset();

  // Remove erros de validação
  document.querySelectorAll('.field-error').forEach(el => el.hidden = true);
  document.querySelectorAll('.text-input').forEach(el => {
    el.classList.remove('is-invalid');
    el.removeAttribute('aria-invalid');
  });

  // Reseta comprovante
  document.getElementById('review-view').hidden = false;
  document.getElementById('receipt-view').hidden = true;

  // Vai para etapa 1
  state.currentStep = 5; // truque: goToStep vai de 5 para 1
  goToStep(1);
}

// ============================================================
// VALIDAÇÕES UTILITÁRIAS
// ============================================================
function validateCPF(cpf) {
  if (cpf.length !== 11) return false;
  if (/^(\d)\1+$/.test(cpf)) return false; // todos dígitos iguais
  let sum = 0;
  for (let i = 0; i < 9; i++) sum += parseInt(cpf[i]) * (10 - i);
  let remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cpf[9])) return false;
  sum = 0;
  for (let i = 0; i < 10; i++) sum += parseInt(cpf[i]) * (11 - i);
  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  return remainder === parseInt(cpf[10]);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ============================================================
// MÁSCARAS DE ENTRADA (CPF e Telefone)
// ============================================================
function maskCPF(value) {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
}

function maskPhone(value) {
  const digits = value.replace(/\D/g, '');
  if (digits.length <= 10) {
    return digits
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{4})(\d)/, '$1-$2');
  }
  return digits
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2');
}

// ============================================================
// MODO ESCURO (Dark Mode)
// ============================================================
function initDarkMode() {
  // Verifica preferência salva no localStorage
  const savedTheme = localStorage.getItem('agendaSaude-theme');
  
  // Se não há preferência salva, respeita a preferência do sistema
  let isDarkMode = savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  applyDarkMode(isDarkMode);
}

function toggleDarkMode() {
  const isDarkMode = document.documentElement.classList.contains('dark-mode');
  applyDarkMode(!isDarkMode);
}

function applyDarkMode(isDarkMode) {
  const html = document.documentElement;
  const btn = document.getElementById('toggle-dark-mode');
  const label = document.getElementById('dark-mode-label');
  const currentLang = getCurrentLanguage();
  
  if (isDarkMode) {
    html.classList.add('dark-mode');
    btn.setAttribute('aria-pressed', 'true');
    if (label) {
      const themeText = currentLang === 'en' ? 'Switch to light mode' : 'Ativar modo claro';
      label.textContent = themeText;
    }
    if (btn) {
      btn.title = currentLang === 'en' ? 'Light mode' : 'Modo claro';
    }
    localStorage.setItem('agendaSaude-theme', 'dark');
  } else {
    html.classList.remove('dark-mode');
    btn.setAttribute('aria-pressed', 'false');
    if (label) {
      const themeText = currentLang === 'en' ? 'Switch to dark mode' : 'Ativar modo escuro';
      label.textContent = themeText;
    }
    if (btn) {
      btn.title = currentLang === 'en' ? 'Dark mode' : 'Modo escuro';
    }
    localStorage.setItem('agendaSaude-theme', 'light');
  }
}

function getCurrentLanguage() {
  const btnPt = document.getElementById('lang-pt');
  return btnPt?.classList.contains('lang-btn--active') ? 'pt' : 'en';
}

// ============================================================
// INICIALIZAÇÃO
// ============================================================
document.addEventListener('DOMContentLoaded', () => {

  // Inicializa modo escuro
  initDarkMode();
  renderSpecialtyList();

  // Inicializa stepper
  updateStepper(1);

  // Busca em tempo real (Step 1)
  const searchInput = document.getElementById('search-unit');
  if (searchInput) {
    searchInput.addEventListener('input', e => {
      renderUnitList(e.target.value);
    });
  }

  // Máscara CPF
  const cpfInput = document.getElementById('patient-cpf');
  if (cpfInput) {
    cpfInput.addEventListener('input', e => {
      const pos = e.target.selectionStart;
      e.target.value = maskCPF(e.target.value);
    });
  }

  // Máscara Telefone
  const phoneInput = document.getElementById('patient-phone');
  if (phoneInput) {
    phoneInput.addEventListener('input', e => {
      e.target.value = maskPhone(e.target.value);
    });
  }

  // Limpa erro ao digitar nos campos
  document.querySelectorAll('.text-input').forEach(input => {
    input.addEventListener('input', () => {
      if (input.classList.contains('is-invalid')) {
        clearFieldError(input, input.getAttribute('aria-describedby')?.split(' ')[0]);
      }
    });
  });

  // Suporte a teclado no calendário (setas)
  document.addEventListener('keydown', e => {
    const focused = document.activeElement;
    if (!focused?.classList.contains('calendar-day')) return;

    const grid = document.getElementById('calendar-grid');
    const days = Array.from(grid.querySelectorAll('.calendar-day:not([tabindex="-1"])'));
    const idx = days.indexOf(focused);
    if (idx === -1) return;

    const keyMap = { ArrowRight: 1, ArrowLeft: -1, ArrowDown: 7, ArrowUp: -7 };
    if (!(e.key in keyMap)) return;

    e.preventDefault();
    const next = days[idx + keyMap[e.key]];
    if (next) next.focus();
  });

  // Tradução inicial
  setLanguage('pt');
});
// ============================================================
// MOTOR DE LEITURA DE TELA (WEB SPEECH API) - APRIMORADO
// ============================================================
let lastReadElement = null; // Variável para evitar que ele repita o mesmo texto sem parar

function toggleAudio() {
  state.audioEnabled = !state.audioEnabled;
  const btn = document.getElementById('toggle-audio');
  const icon = document.getElementById('audio-icon');
  
  btn.setAttribute('aria-pressed', state.audioEnabled);

  if (state.audioEnabled) {
    icon.textContent = '🔊';
    // Mensagem inicial ensinando a usar
    const msg = state.lang === 'pt' ? 'Áudio ativado. Navegue pelo site com o mouse ou teclado para ouvir.' : 
                state.lang === 'es' ? 'Audio activado. Navegue por el sitio para escuchar.' : 
                'Audio enabled. Navigate the site to listen.';
    speakText(msg);
    initAudioReader(); // Liga os sensores de leitura
  } else {
    icon.textContent = '🔇';
    window.speechSynthesis.cancel(); // Cala a boca na hora
    removeAudioReader(); // Desliga os sensores
  }
}

function speakText(text) {
  if (!state.audioEnabled || !('speechSynthesis' in window)) return;
  
  window.speechSynthesis.cancel(); // Para a frase anterior para ler a nova imediatamente
  
  const utterance = new SpeechSynthesisUtterance(text);
  
  if (state.lang === 'pt') utterance.lang = 'pt-BR';
  else if (state.lang === 'en') utterance.lang = 'en-US';
  else if (state.lang === 'es') utterance.lang = 'es-ES';
  
  utterance.rate = 0.9; // Um pouco mais lento para clareza
  utterance.pitch = 1.0;
  
  window.speechSynthesis.speak(utterance);
}

/// O CÉREBRO DO LEITOR: Decide o que ler e quando ler
function handleReadElement(e) {
  if (!state.audioEnabled) return;

  // 1. ALARGÁMOS O FILTRO: Agora apanha spans, listas (li), legendas e botões do calendário
  const readable = e.target.closest('h1, h2, h3, p, button, a, input, label, li, span, legend, .unit-card, .calendar-day, .time-btn');

  // Se não tem texto ou é o mesmo elemento de antes, ignora para não repetir
  if (!readable || readable === lastReadElement) return;

  lastReadElement = readable;

  // Ignora o botão de áudio para não ser repetitivo
  if (readable.id === 'toggle-audio') return;

  // Tenta apanhar o texto invisível (aria-label), ou o texto renderizado, ou o texto direto
  let textToRead = readable.getAttribute('aria-label') || readable.innerText || readable.textContent;

  // Tratamento especial para formulários
  if (readable.tagName === 'INPUT') {
     const labelText = readable.closest('.form-group')?.querySelector('.field-label')?.innerText || '';
     const valueText = readable.value ? `Valor atual: ${readable.value}` : (readable.getAttribute('placeholder') || '');
     
     // Traduz o aviso inicial do campo
     const introMsg = state.lang === 'pt' ? 'Campo de digitação:' : 
                      state.lang === 'es' ? 'Campo de texto:' : 'Input field:';
                      
     textToRead = `${introMsg} ${labelText}. ${valueText}`;
  }

  // Envia para o motor falar apenas se houver texto válido
  if (textToRead && textToRead.trim() !== '') {
    
    // 2. MAGIA ANTI-SPAM (Debounce): 
    // Evita que o navegador bloqueie a voz se o utilizador mover o rato muito rápido
    clearTimeout(window.readTimeout);
    window.readTimeout = setTimeout(() => {
      speakText(textToRead.trim());
    }, 150); // Aguarda 150 milissegundos (o rato tem de "parar" no texto para ele ler)
  }


  // Envia para o motor falar
  if (textToRead && textToRead.trim() !== '') {
    speakText(textToRead.trim());
  }
}

// Liga os sensores
function initAudioReader() {
  document.addEventListener('focusin', handleReadElement);   // Detecta navegação por teclado (Tab)
  document.addEventListener('mouseover', handleReadElement); // Detecta navegação por mouse
}

// Desliga os sensores
function removeAudioReader() {
  document.removeEventListener('focusin', handleReadElement);
  document.removeEventListener('mouseover', handleReadElement);
  lastReadElement = null;
}