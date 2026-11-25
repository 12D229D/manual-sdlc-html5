// Datos Completos del Ciclo de Vida del Desarrollo de Software (SDLC)
const SDLC_PHASES = [
  {
    id: 1,
    name: "Planificación",
    short: "Plan",
    icon: "📋",
    color: "hsl(210, 95%, 58%)",
    tagline: "Definición de objetivos, alcance, viabilidad y estimación de recursos.",
    role: "Project Manager, Product Owner, FinOps",
    summary: "Etapa fundacional donde se conceptualiza la iniciativa técnica o de negocio, evaluando viabilidad económica, operativa y técnica, y se establece el cronograma maestro y la asignación de recursos.",
    activities: [
      "Estudio de viabilidad técnica, operativa y financiera (ROI/TCO).",
      "Definición inicial del alcance y delimitación de fronteras del sistema.",
      "Identificación preliminar de riesgos y planes de mitigación.",
      "Estimación de presupuestos, cronograma base (Gantt) y asignación de equipo."
    ],
    deliverables: [
      "Project Charter (Acta de Constitución del Proyecto).",
      "Business Case y Evaluación de Viabilidad.",
      "Plan de Gestión de Riesgos preliminar.",
      "Cronograma Maestro y Matriz RACI inicial."
    ],
    tools: ["Jira", "Monday", "MS Project", "Notion", "Miro"]
  },
  {
    id: 2,
    name: "Análisis de Requisitos",
    short: "Requisitos",
    icon: "🔍",
    color: "hsl(270, 85%, 65%)",
    tagline: "Levantamiento detallado de necesidades del usuario y contratos de negocio.",
    role: "Business Analyst, Product Manager, Lead Architect",
    summary: "Fase de descubrimiento profundo en la que se interactúa con stakeholders para extraer, documentar y validar requerimientos funcionales y no funcionales (RFN/RNF), fijando criterios de aceptación rigurosos.",
    activities: [
      "Entrevistas, talleres de Design Sprint y encuestas con usuarios clave.",
      "Redacción de Historias de Usuario (User Stories) con criterios INVEST.",
      "Definición de requerimientos no funcionales (rendimiento, seguridad, concurrencia).",
      "Modelado de Casos de Uso y flujos de procesos de negocio (BPMN)."
    ],
    deliverables: [
      "PRD (Product Requirements Document).",
      "SRS (Software Requirements Specification) según IEEE 830.",
      "Backlog refinado con criterios de aceptación (Gherkin/Given-When-Then).",
      "Matriz de Trazabilidad de Requisitos (RTM)."
    ],
    tools: ["Confluence", "Jira Software", "Enterprise Architect", "Lucidchart"]
  },
  {
    id: 3,
    name: "Diseño del Software",
    short: "Diseño",
    icon: "📐",
    color: "hsl(320, 80%, 60%)",
    tagline: "Modelado arquitectónico, patrones, diagramas de BD y prototipado UI/UX.",
    role: "Software Architect, UI/UX Designer, Data Engineer",
    summary: "Se transforma el 'qué' del análisis en el 'cómo' técnico. Se seleccionan patrones arquitectónicos (microservicios, modular monolito, event-driven), modelos relacionales o NoSQL, contratos OpenAPI y prototipos de alta fidelidad.",
    activities: [
      "Diseño de la arquitectura del sistema y selección del stack tecnológico.",
      "Modelado Entidad-Relación y diseño de esquemas de bases de datos (DDL).",
      "Especificación de APIs REST / GraphQL / gRPC mediante contratos OpenAPI/Swagger.",
      "Creación de Wireframes, Mockups y Design DNA interactivo en Figma."
    ],
    deliverables: [
      "Documento de Arquitectura de Software (SAD - Software Architecture Document).",
      "Diagramas C4 (Contexto, Contenedores, Componentes, Código).",
      "Esquema de BD relacional (`schema.sql`) y diagramas ERD.",
      "Prototipos de UI interactivos y contrato declarativo `openapi.yaml`."
    ],
    tools: ["Figma", "Stitch MCP", "Draw.io", "Swagger Editor", "PlantUML"]
  },
  {
    id: 4,
    name: "Desarrollo / Programación",
    short: "Desarrollo",
    icon: "💻",
    color: "hsl(188, 95%, 48%)",
    tagline: "Construcción del código fuente bajo estándares de ingeniería y clean code.",
    role: "Tech Lead, Frontend Dev, Backend Dev, Full-Stack",
    summary: "Fase de codificación donde los ingenieros traducen especificaciones y diseños en código fuente ejecutable, aplicando buenas prácticas como Clean Architecture, SOLID, tipado estricto y control de versiones distribuido.",
    activities: [
      "Implementación de lógica de negocio, servicios backend y componentes frontend.",
      "Escritura de pruebas unitarias locales guiadas por TDD/BDD.",
      "Gestión de dependencias, scripts de construcción y linters automatizados.",
      "Revisiones de código entre pares (Peer Code Reviews) en Pull/Merge Requests."
    ],
    deliverables: [
      "Código fuente versionado en repositorio Git (GitHub/GitLab/Bitbucket).",
      "Suites de pruebas unitarias con cobertura mínima (>80%).",
      "Documentación interna en código, Docstrings y README técnico.",
      "Artefactos compilados o empaquetados listos para integración continua."
    ],
    tools: ["VS Code", "Git", "Node.js / Python / Rust", "Docker", "ESLint / Prettier"]
  },
  {
    id: 5,
    name: "Pruebas y QA",
    short: "Testing",
    icon: "🧪",
    color: "hsl(38, 95%, 52%)",
    tagline: "Verificación, validación y aseguramiento de calidad antes de producción.",
    role: "QA Automation Engineer, Security Auditor, QA Tester",
    summary: "Inspección sistemática del software para garantizar ausencia de bugs críticos, validar rendimiento bajo carga, comprobar regresiones y verificar cumplimiento de requisitos de seguridad y accesibilidad.",
    activities: [
      "Ejecución de pruebas de integración, end-to-end (E2E) y pruebas de regresión.",
      "Pruebas de estrés y rendimiento de carga (concurrencia, latencia, throughput).",
      "Escaneos de seguridad de código estático (SAST) y dinámico (DAST).",
      "Pruebas de Aceptación del Usuario (UAT - User Acceptance Testing)."
    ],
    deliverables: [
      "Plan de Pruebas Maestro (Master Test Plan).",
      "Reporte de Ejecución de Pruebas y Cobertura de Código.",
      "Matriz de defectos clasificada por severidad (Bugs Tracker).",
      "Certificado formal de UAT firmado por los stakeholders."
    ],
    tools: ["Playwright", "Cypress", "Postman / Newman", "k6 / JMeter", "SonarQube"]
  },
  {
    id: 6,
    name: "Despliegue e Implementación",
    short: "Despliegue",
    icon: "🚀",
    color: "hsl(155, 80%, 46%)",
    tagline: "Paso a entornos de Staging y Producción mediante pipelines CI/CD.",
    role: "DevOps Engineer, SRE, Cloud Architect",
    summary: "Publicación de la aplicación en la infraestructura de producción mediante automatizaciones de CI/CD, aplicando estrategias de despliegue sin tiempo de inactividad (Zero-Downtime) como Blue/Green o Canary releases.",
    activities: [
      "Ejecución de pipelines automatizados de CI/CD con validación de gates de calidad.",
      "Aprovisionamiento de infraestructura como código (IaC con Terraform/Ansible).",
      "Despliegues progresivos (Canary releases, Blue-Green o Feature Flags).",
      "Verificación post-despliegue mediante pruebas de humo (Smoke Tests)."
    ],
    deliverables: [
      "Artefactos desplegados en producción (Cloudflare, AWS, Vercel, VPS).",
      "Pipelines CI/CD auditados y versionados en el repositorio.",
      "Playbook o Plan de Rollback de contingencia validado.",
      "Release Notes oficiales para usuarios y equipo técnico."
    ],
    tools: ["GitHub Actions", "GitLab CI", "Cloudflare Pages/Workers", "Terraform", "Kubernetes"]
  },
  {
    id: 7,
    name: "Mantenimiento y Evolución",
    short: "Mantenimiento",
    icon: "🛡️",
    color: "hsl(230, 80%, 65%)",
    tagline: "Monitoreo continuo, corrección de incidentes, parches y mejoras evolutivas.",
    role: "SRE, Support Engineer, Maintenance Dev Team",
    summary: "Ciclo post-lanzamiento dedicado a mantener la alta disponibilidad del servicio, gestionar la observabilidad en tiempo real (logs, métricas, trazas), aplicar parches de seguridad y atender deuda técnica.",
    activities: [
      "Monitoreo de SLAs, SLOs, tasas de error y latencia en producción 24/7.",
      "Gestión de incidentes en tiempo real y análisis de causa raíz (Post-Mortem).",
      "Actualización periódica de librerías, parches de seguridad y dependencias.",
      "Planificación de mejoras menores y refactorización para mitigar deuda técnica."
    ],
    deliverables: [
      "Dashboards de Observabilidad y Telemetría activos.",
      "Reportes de Incidentes y Post-Mortems de no recurrencia.",
      "Historial de Parches y Changelog continuo (SemVer).",
      "Auditorías trimestrales de seguridad y rendimiento."
    ],
    tools: ["Datadog", "Prometheus + Grafana", "Sentry", "Dependabot", "PagerDuty"]
  }
];

// Glosario de Conceptos de Ingeniería SDLC
const GLOSSARY_TERMS = [
  { term: "PRD", phase: "Análisis", desc: "Product Requirements Document: Especifica el propósito, características clave y criterios funcionales del producto." },
  { term: "User Story", phase: "Análisis", desc: "Descripción concisa en lenguaje natural de una necesidad del usuario: 'Como [rol], quiero [acción] para [beneficio]'." },
  { term: "Diagramas C4", phase: "Diseño", desc: "Modelo visual de 4 niveles para arquitectura de software: Contexto, Contenedores, Componentes y Código." },
  { term: "TDD", phase: "Desarrollo", desc: "Test-Driven Development: Ciclo 'Red-Green-Refactor' donde las pruebas unitarias se escriben antes del código." },
  { term: "CI/CD", phase: "Despliegue", desc: "Continuous Integration / Continuous Deployment: Automatización del empaquetado, pruebas y despliegue continuo." },
  { term: "Blue-Green", phase: "Despliegue", desc: "Estrategia de lanzamiento con dos entornos idénticos (Azul y Verde) para reducir el downtime a cero." },
  { term: "UAT", phase: "Testing", desc: "User Acceptance Testing: Validación final del sistema por parte de los usuarios de negocio antes de producción." },
  { term: "Deuda Técnica", phase: "Mantenimiento", desc: "Costo implícito acumulado por tomar atajos arquitectónicos en lugar de diseñar soluciones sólidas." },
  { term: "SLO / SLA", phase: "Mantenimiento", desc: "Service Level Objective / Agreement: Metas cuantificables de disponibilidad y calidad pactadas con el cliente." },
  { term: "Matriz RACI", phase: "Planificación", desc: "Matriz de asignación de responsabilidades: Responsible, Accountable, Consulted, Informed." },
  { term: "SAST / DAST", phase: "Testing", desc: "Static/Dynamic Application Security Testing: Análisis automatizado de vulnerabilidades en código y en tiempo de ejecución." },
  { term: "OpenAPI", phase: "Diseño", desc: "Estándar neutral para describir APIs RESTful mediante contratos legibles por humanos y máquinas." }
];

// Preguntas de Autoevaluación (Quiz)
const QUIZ_QUESTIONS = [
  {
    question: "¿En qué fase del SDLC se define la arquitectura de software, los modelos de base de datos y los contratos OpenAPI?",
    options: [
      "Fase 1: Planificación",
      "Fase 2: Análisis de Requisitos",
      "Fase 3: Diseño del Software",
      "Fase 4: Desarrollo"
    ],
    correct: 2,
    explanation: "El Diseño del Software (Fase 3) es donde se transforma el 'qué' del análisis en el 'cómo' técnico, definiendo diagramas C4, esquemas DDL y especificaciones de APIs."
  },
  {
    question: "¿Qué técnica de desarrollo promueve escribir las pruebas unitarias antes de implementar la funcionalidad concreta?",
    options: [
      "UAT (User Acceptance Testing)",
      "TDD (Test-Driven Development)",
      "Blue-Green Deployment",
      "BPMN Modeling"
    ],
    correct: 1,
    explanation: "TDD (Desarrollo Guiado por Pruebas) sigue el ciclo Rojo-Verde-Refactorización: primero falla la prueba, se programa lo mínimo para pasarla y luego se refina el código."
  },
  {
    question: "¿Cuál es el propósito principal de un despliegue 'Blue-Green' en la fase de Despliegue?",
    options: [
      "Comprimir el tamaño de los binarios antes de subirlos a producción.",
      "Garantizar lanzamientos con cero tiempo de inactividad (Zero-Downtime) y rollback casi instantáneo.",
      "Generar la documentación técnica del código automáticamente.",
      "Medir la cobertura de pruebas unitarias en el servidor de producción."
    ],
    correct: 1,
    explanation: "Blue-Green mantiene dos entornos de producción idénticos. Si el nuevo entorno (Verde) pasa los chequeos, el router conmuta el tráfico inmediatamente; si falla, se revierte al instante sin caída de servicio."
  },
  {
    question: "¿Qué artefacto formal certifica que los usuarios finales validaron que el software cumple sus expectativas de negocio?",
    options: [
      "Pull Request mergeado",
      "Acta de UAT (User Acceptance Testing) aprobada",
      "Diagrama de clases UML",
      "Registro de errores de consola (Sentry)"
    ],
    correct: 1,
    explanation: "El UAT es la prueba formal realizada por los usuarios clave o clientes donde se verifica que el software resuelve las necesidades reales y autoriza su paso a producción."
  },
  {
    question: "¿Qué tipo de mantenimiento se realiza para prevenir futuros fallos o reducir la deuda técnica antes de que ocurra una avería?",
    options: [
      "Mantenimiento Correctivo de Emergencia",
      "Mantenimiento Preventivo / Perfectivo",
      "Mantenimiento Regresivo",
      "Mantenimiento de Hotfix"
    ],
    correct: 1,
    explanation: "El mantenimiento preventivo y perfectivo se enfoca en optimizar código, refactorizar componentes, actualizar dependencias y parchear vulnerabilidades preventivamente."
  }
];

// Estado Global de la SPA
let currentPhaseIndex = 0;
let currentQuizIndex = 0;
let quizScore = 0;
let checklistState = {};

// Carga Inicial
document.addEventListener("DOMContentLoaded", () => {
  loadChecklistFromStorage();
  renderStepper();
  showPhaseDetails(0);
  renderChecklist();
  renderGlossary(GLOSSARY_TERMS);
  loadQuizQuestion(0);
  setupEventListeners();
  updateProgressStats();
});

// Configurar Manejadores de Eventos
function setupEventListeners() {
  // Buscador global
  const searchInput = document.getElementById("global-search");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const query = e.target.value.toLowerCase().trim();
      filterContent(query);
    });
  }

  // Botón reset checklist
  const resetBtn = document.getElementById("btn-reset-checklist");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (confirm("¿Deseas reiniciar todo el progreso del checklist de entregables?")) {
        checklistState = {};
        localStorage.removeItem("sdlc_checklist_progress");
        renderChecklist();
        updateProgressStats();
      }
    });
  }

  // Navegación de fases anterior / siguiente
  const btnPrev = document.getElementById("btn-prev-phase");
  const btnNext = document.getElementById("btn-next-phase");
  if (btnPrev && btnNext) {
    btnPrev.addEventListener("click", () => {
      if (currentPhaseIndex > 0) {
        showPhaseDetails(currentPhaseIndex - 1);
      }
    });
    btnNext.addEventListener("click", () => {
      if (currentPhaseIndex < SDLC_PHASES.length - 1) {
        showPhaseDetails(currentPhaseIndex + 1);
      }
    });
  }

  // Botón siguiente pregunta quiz
  const btnNextQuiz = document.getElementById("btn-quiz-next");
  if (btnNextQuiz) {
    btnNextQuiz.addEventListener("click", nextQuizQuestion);
  }

  // Botón reiniciar quiz
  const btnRestartQuiz = document.getElementById("btn-quiz-restart");
  if (btnRestartQuiz) {
    btnRestartQuiz.addEventListener("click", restartQuiz);
  }
}

// Renderizado del Diagrama Interactivo de Fases (Stepper)
function renderStepper() {
  const container = document.getElementById("pipeline-stepper");
  if (!container) return;

  container.innerHTML = "";
  SDLC_PHASES.forEach((phase, idx) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = `step-card ${idx === currentPhaseIndex ? "active" : ""}`;
    card.id = `step-tab-${phase.id}`;
    card.setAttribute("aria-label", `Fase ${phase.id}: ${phase.name}`);
    card.innerHTML = `
      <div class="step-num">${phase.id}</div>
      <div class="step-name">${phase.short}</div>
      <div class="step-badge">${phase.icon}</div>
    `;
    card.addEventListener("click", () => {
      showPhaseDetails(idx);
    });
    container.appendChild(card);
  });
}

// Visualizador de Fase Seleccionada
function showPhaseDetails(index) {
  currentPhaseIndex = index;
  const phase = SDLC_PHASES[index];

  // Actualizar clases activas en el Stepper
  const cards = document.querySelectorAll(".step-card");
  cards.forEach((c, i) => {
    c.classList.toggle("active", i === index);
  });

  // Actualizar contenido de la vista
  document.getElementById("phase-big-icon").textContent = phase.icon;
  document.getElementById("phase-title").textContent = `Fase ${phase.id}: ${phase.name}`;
  document.getElementById("phase-tagline").textContent = phase.tagline;
  document.getElementById("phase-role").innerHTML = `<span>👥</span> <strong>Roles clave:</strong> ${phase.role}`;
  document.getElementById("phase-summary").textContent = phase.summary;

  // Renderizar Actividades
  const actList = document.getElementById("phase-activities");
  actList.innerHTML = phase.activities
    .map(act => `<li class="activity-item"><span class="activity-bullet">▸</span><span>${act}</span></li>`)
    .join("");

  // Renderizar Entregables
  const delivList = document.getElementById("phase-deliverables");
  delivList.innerHTML = phase.deliverables
    .map(del => `<li class="deliverable-item"><span class="deliverable-icon">📦</span><span>${del}</span></li>`)
    .join("");

  // Renderizar Herramientas
  const toolsWrap = document.getElementById("phase-tools");
  toolsWrap.innerHTML = phase.tools
    .map(tool => `<span class="tool-chip">${tool}</span>`)
    .join("");

  // Manejo de botones Prev/Next
  const btnPrev = document.getElementById("btn-prev-phase");
  const btnNext = document.getElementById("btn-next-phase");
  if (btnPrev && btnNext) {
    btnPrev.disabled = index === 0;
    btnNext.disabled = index === SDLC_PHASES.length - 1;
    btnPrev.innerHTML = index > 0 ? `← ${SDLC_PHASES[index - 1].short}` : "← Inicio";
    btnNext.innerHTML = index < SDLC_PHASES.length - 1 ? `${SDLC_PHASES[index + 1].short} →` : "Fin →";
  }
}

// Renderizado del Checklist de Entregables por Fase
function renderChecklist() {
  const container = document.getElementById("checklist-grid");
  if (!container) return;

  container.innerHTML = "";
  SDLC_PHASES.forEach((phase) => {
    const card = document.createElement("div");
    card.className = "phase-checklist-card";

    let itemsHtml = "";
    phase.deliverables.forEach((item, itemIdx) => {
      const key = `p${phase.id}_d${itemIdx}`;
      const isChecked = checklistState[key] ? "checked" : "";
      itemsHtml += `
        <label class="task-item ${isChecked ? "checked" : ""}" for="chk-${key}">
          <input type="checkbox" id="chk-${key}" data-key="${key}" ${isChecked}>
          <span>${item}</span>
        </label>
      `;
    });

    card.innerHTML = `
      <div class="phase-checklist-header">
        <span>${phase.icon} ${phase.id}. ${phase.name}</span>
        <span style="font-size: 0.75rem; color: var(--accent-cyan); font-family: var(--font-mono);">${phase.deliverables.length} entregables</span>
      </div>
      <div class="phase-checklist-items">
        ${itemsHtml}
      </div>
    `;

    container.appendChild(card);
  });

  // Delegación de eventos para checkboxes
  container.querySelectorAll("input[type='checkbox']").forEach(input => {
    input.addEventListener("change", (e) => {
      const key = e.target.dataset.key;
      checklistState[key] = e.target.checked;
      const parentLabel = e.target.closest(".task-item");
      if (parentLabel) {
        parentLabel.classList.toggle("checked", e.target.checked);
      }
      saveChecklistToStorage();
      updateProgressStats();
    });
  });
}

function updateProgressStats() {
  let totalTasks = 0;
  let completedTasks = 0;

  SDLC_PHASES.forEach((phase) => {
    phase.deliverables.forEach((_, itemIdx) => {
      totalTasks++;
      const key = `p${phase.id}_d${itemIdx}`;
      if (checklistState[key]) {
        completedTasks++;
      }
    });
  });

  const percentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
  
  const fillEl = document.getElementById("progress-bar-fill");
  const percentEl = document.getElementById("progress-percent-txt");
  const statCompleted = document.getElementById("stat-deliverables-done");

  if (fillEl) fillEl.style.width = `${percentage}%`;
  if (percentEl) percentEl.textContent = `${completedTasks} / ${totalTasks} (${percentage}%)`;
  if (statCompleted) statCompleted.textContent = `${percentage}%`;
}

function saveChecklistToStorage() {
  try {
    localStorage.setItem("sdlc_checklist_progress", JSON.stringify(checklistState));
  } catch (e) {
    console.warn("No se pudo guardar en localStorage:", e);
  }
}

function loadChecklistFromStorage() {
  try {
    const data = localStorage.getItem("sdlc_checklist_progress");
    if (data) {
      checklistState = JSON.parse(data);
    }
  } catch (e) {
    console.warn("Error leyendo localStorage:", e);
    checklistState = {};
  }
}

// Renderizado de Glosario / Búsqueda
function renderGlossary(terms) {
  const container = document.getElementById("glossary-grid");
  if (!container) return;

  if (terms.length === 0) {
    container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--text-dim); padding: 2rem;">No se encontraron conceptos que coincidan con la búsqueda.</div>`;
    return;
  }

  container.innerHTML = terms.map(t => `
    <div class="term-card">
      <div class="term-head">
        <span class="term-title">${t.term}</span>
        <span class="term-phase-tag">${t.phase}</span>
      </div>
      <p class="term-desc">${t.desc}</p>
    </div>
  `).join("");
}

// Filtro de Búsqueda Dinámica
function filterContent(query) {
  if (!query) {
    renderGlossary(GLOSSARY_TERMS);
    return;
  }

  const filtered = GLOSSARY_TERMS.filter(t => 
    t.term.toLowerCase().includes(query) ||
    t.desc.toLowerCase().includes(query) ||
    t.phase.toLowerCase().includes(query)
  );

  renderGlossary(filtered);
}

// Módulo Interactivo del Quiz
function loadQuizQuestion(index) {
  currentQuizIndex = index;
  const q = QUIZ_QUESTIONS[index];
  const qNum = document.getElementById("quiz-current-num");
  const qTotal = document.getElementById("quiz-total-num");
  const qText = document.getElementById("quiz-question-text");
  const optionsBox = document.getElementById("quiz-options-box");
  const feedback = document.getElementById("quiz-feedback");
  const btnNext = document.getElementById("btn-quiz-next");
  const btnRestart = document.getElementById("btn-quiz-restart");

  if (feedback) feedback.className = "quiz-feedback";
  if (btnNext) btnNext.style.display = "none";
  if (btnRestart) btnRestart.style.display = "none";

  if (qNum) qNum.textContent = index + 1;
  if (qTotal) qTotal.textContent = QUIZ_QUESTIONS.length;
  if (qText) qText.textContent = q.question;

  if (optionsBox) {
    optionsBox.innerHTML = "";
    q.options.forEach((optText, optIdx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "quiz-option-btn";
      btn.innerHTML = `<span>${optText}</span><span class="opt-indicator"></span>`;
      btn.addEventListener("click", () => handleQuizAnswer(optIdx));
      optionsBox.appendChild(btn);
    });
  }
}

function handleQuizAnswer(selectedIdx) {
  const q = QUIZ_QUESTIONS[currentQuizIndex];
  const buttons = document.querySelectorAll(".quiz-option-btn");
  const feedback = document.getElementById("quiz-feedback");
  const btnNext = document.getElementById("btn-quiz-next");

  buttons.forEach((b, i) => {
    b.disabled = true;
    if (i === q.correct) {
      b.classList.add("correct");
    } else if (i === selectedIdx) {
      b.classList.add("wrong");
    }
  });

  const isCorrect = selectedIdx === q.correct;
  if (isCorrect) {
    quizScore++;
    feedback.className = "quiz-feedback show correct";
    feedback.innerHTML = `<strong>¡Correcto! 🎉</strong> ${q.explanation}`;
  } else {
    feedback.className = "quiz-feedback show wrong";
    feedback.innerHTML = `<strong>Incorrecto. ⚠️</strong> ${q.explanation}`;
  }

  if (btnNext) {
    btnNext.style.display = "inline-flex";
    btnNext.textContent = currentQuizIndex === QUIZ_QUESTIONS.length - 1 ? "Ver Resultados" : "Siguiente Pregunta →";
  }
}

function nextQuizQuestion() {
  if (currentQuizIndex < QUIZ_QUESTIONS.length - 1) {
    loadQuizQuestion(currentQuizIndex + 1);
  } else {
    showQuizResults();
  }
}

function showQuizResults() {
  const optionsBox = document.getElementById("quiz-options-box");
  const feedback = document.getElementById("quiz-feedback");
  const qText = document.getElementById("quiz-question-text");
  const btnNext = document.getElementById("btn-quiz-next");
  const btnRestart = document.getElementById("btn-quiz-restart");

  const percentage = Math.round((quizScore / QUIZ_QUESTIONS.length) * 100);
  let feedbackMsg = "";

  if (percentage >= 80) {
    feedbackMsg = "¡Excelente dominio! Tienes una sólida comprensión de la ingeniería de software y las fases del SDLC.";
  } else if (percentage >= 60) {
    feedbackMsg = "Buen trabajo. Conoces los principios generales, pero te recomendamos repasar los roles y técnicas clave de testing y despliegue.";
  } else {
    feedbackMsg = "Puntaje básico. Te sugerimos revisar con atención cada una de las 7 fases y los conceptos del glosario.";
  }

  qText.textContent = `Resultado de la Autoevaluación: ${quizScore} de ${QUIZ_QUESTIONS.length} (${percentage}%)`;
  optionsBox.innerHTML = `
    <div style="background: hsla(222, 35%, 12%, 0.8); border: 1px solid var(--border-glass); border-radius: var(--radius-md); padding: 1.5rem; text-align: center;">
      <div style="font-size: 3rem; margin-bottom: 0.5rem;">${percentage >= 80 ? "🏆" : (percentage >= 60 ? "💡" : "📚")}</div>
      <p style="color: var(--text-main); font-size: 1.05rem; margin-bottom: 1rem;">${feedbackMsg}</p>
      <div style="font-family: var(--font-mono); font-size: 0.9rem; color: var(--accent-cyan);">Aciertos: ${quizScore} / ${QUIZ_QUESTIONS.length}</div>
    </div>
  `;

  if (feedback) feedback.className = "quiz-feedback";
  if (btnNext) btnNext.style.display = "none";
  if (btnRestart) btnRestart.style.display = "inline-flex";
}

function restartQuiz() {
  quizScore = 0;
  loadQuizQuestion(0);
}
