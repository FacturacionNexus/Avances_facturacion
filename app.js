/**
 * Nexus Facturación - Visor de Bitácora y Avances de Desarrollo
 * Modo Solo Lectura (Público / Clientes / Stakeholders)
 */

const state = {
  posts: [],
  currentTag: 'all',
  searchQuery: '',
  viewMode: 'timeline',
  lightboxImages: [],
  currentLightboxIndex: 0
};

const FALLBACK_POSTS = [
  {
    "id": "dia-10",
    "date": "2026-11-07",
    "dayNumber": 10,
    "title": "Tutoriales Guiados para el Personal, Centro de Ayuda y Cobro Rápido en Caja",
    "category": "Atención al Cliente & Punto de Venta",
    "tags": [
      "Punto de Venta (POS)",
      "Capacitación en Vivo",
      "Búsqueda Rápida",
      "Atajos de Teclado",
      "Pantallas Táctiles"
    ],
    "summary": "Se integraron tutoriales interactivos que enseñan a usar el sistema paso a paso según el puesto de trabajo (cajero o administrador), un centro de ayuda con atajos de teclado para agilizar la atención, y un buscador inteligente en caja que sugiere productos al instante sin demoras.",
    "highlights": [
      "Capacitación Interactiva por Puesto: El sistema guía en pantalla a cada empleado en su primer inicio de sesión, mostrando únicamente los pasos y funciones que corresponden a su rol.",
      "Centro de Ayuda y Teclas Rápidas: Botón de asistencia directa con atajos de teclado (como F2 para cliente nuevo o F9 para cobrar) para atender más rápido a los clientes en fila.",
      "Buscador Inteligente en Caja: La barra de cobro inicia lista para escribir o escanear, sugiriendo coincidencias automáticas de inmediato para no perder tiempo buscando productos.",
      "Diseño Táctil y Moderno: Nueva imagen visual del sistema y adaptación fluida para trabajar cómodamente en pantallas táctiles de mostrador o computadoras de caja."
    ],
    "screenshots": [
      {
        "url": "assets/uploads/nexus-tour-interactivo-live.jpg",
        "caption": "Tutorial Interactivo: Guía en pantalla que capacita al personal paso a paso de forma exclusiva para su función"
      },
      {
        "url": "assets/uploads/nexus-centro-ayuda-atajos.jpg",
        "caption": "Centro de Ayuda: Panel de consulta rápida con atajos de teclado pensados para acelerar la atención en caja"
      },
      {
        "url": "assets/uploads/nexus-pos-buscador-directo.png",
        "caption": "Punto de Venta Ágil: Barra de búsqueda lista para escribir o escanear productos con sugerencias instantáneas"
      }
    ]
  },
  {
    "id": "dia-9",
    "date": "2026-11-06",
    "dayNumber": 9,
    "title": "Catálogo de Productos, Códigos de Barra Automáticos y Envío de Accesos por Correo",
    "category": "Gestión de Productos & Seguridad",
    "tags": [
      "Catálogo de Productos",
      "Códigos de Barra",
      "Control de Inventario",
      "Envío de Credenciales",
      "Gestión de Personal"
    ],
    "summary": "Se habilitó el módulo central para gestionar todos los productos con cálculo automático de impuestos según la ley, generación de códigos de barra, protección para no borrar productos con ventas o stock, y envío automático de accesos al correo de cada nuevo empleado.",
    "highlights": [
      "Panel de Productos y Precios: Vista clara de todos los artículos registrados, productos activos para la venta y control de alícuotas de IVA (general, reducida y exentos).",
      "Generación Automática de Códigos de Barra: Creación instantánea de códigos estándar listos para escanear con pistolas lectoras en el mostrador o almacén.",
      "Protección contra Errores de Borrado: El sistema avisa y bloquea la eliminación accidental de un producto si tiene historial de ventas o mercancía en inventario.",
      "Envío Automático de Usuarios y Claves: Cada vez que se registra un cajero o administrador, el sistema le envía un correo formal de bienvenida con sus credenciales de acceso."
    ],
    "screenshots": [
      {
        "url": "assets/uploads/nexus-admin-catalogo-quimicos.jpg",
        "caption": "Catálogo de Productos: Vista central con inventario disponible, precios en tiempo real y cálculo de impuestos"
      },
      {
        "url": "assets/uploads/nexus-admin-productos-crud.jpg",
        "caption": "Protección de Inventario: Mensaje de confirmación que evita borrar productos con historial o existencia en almacén"
      },
      {
        "url": "assets/uploads/nexus-smtp-email-bienvenida.png",
        "caption": "Correo de Bienvenida: Notificación formal que recibe el personal con sus datos y contraseña para iniciar sesión"
      }
    ]
  },
  {
    "id": "dia-8",
    "date": "2026-10-24",
    "dayNumber": 8,
    "title": "Modo Cajero Protegido, Reimpresión Térmica Bixolon (80mm), Filtros Avanzados por Sede/Fecha e Interfaz Responsive",
    "category": "Frontend POS & Control Fiscal",
    "tags": [
      "Modo Cajero Protegido",
      "Reimpresión Fiscal",
      "BIXOLON 80mm",
      "Libro de Facturas",
      "Filtros por Fecha",
      "Responsive UI",
      "Drawer Móvil",
      "Seguridad Fiscal"
    ],
    "summary": "Implementación del Modo Cajero Protegido con aislamiento estricto antifraude, rediseño completo del libro de ventas (/documentos) con filtros cruzados por sede física y rangos de fechas, soporte optimizado de reimpresión térmica Bixolon según regulaciones del SENIAT y arquitectura de interfaz 100% responsive con navegación móvil.",
    "highlights": [
      "Modo Cajero Protegido Antifraude (/documentos): Aislamiento que restringe al cajero a consultar y reimprimir solo el último comprobante de su turno, bloqueando el libro general.",
      "Libro de Facturas con Filtros Dinámicos: Búsqueda avanzada por sede física y rangos de fechas, con métricas en tiempo real en Bs./USD y trazabilidad de pagos.",
      "Motor de Reimpresión Fiscal Bixolon (80mm): Formato térmico homologado por el SENIAT con desglose de alícuotas (16%, 8%, exento), RIF receptor, QR y pie de máquina fiscal.",
      "Interfaz 100% Responsive: Adaptación para tablets y smartphones con drawer táctil (SidebarNav), soporte de pantalla completa (F11) y botones optimizados.",
      "Estabilización de Producción: Ajuste de suspense boundaries en login, depuración de middlewares de auth y pooler de conexiones PostgreSQL en Supabase."
    ],
    "screenshots": [
      {
        "url": "assets/uploads/nexus-facturas-listado-auditoria.png",
        "caption": "Libro de Facturas (/documentos): Auditoría consolidada con correlativo fiscal, desglose por sucursal, caja y montos acumulados"
      },
      {
        "url": "assets/uploads/factura-proquimicos-preview.png",
        "caption": "Reimpresión Térmica Bixolon (80mm): Vista previa y reimpresión de comprobante fiscal homologado SENIAT con desglose de alícuotas"
      },
      {
        "url": "assets/uploads/nexus-pos-factura-selector.png",
        "caption": "Terminal POS & Modo Cajero Protegido: Facturación en mostrador con acceso exclusivo a reimpresión de última factura (antifraude / en espera) y pantalla completa (F11)"
      }
    ]
  },
  {
    "id": "dia-7",
    "date": "2026-10-03",
    "dayNumber": 7,
    "title": "Módulo de Galpones e Inventario: Nuevos Roles, Traslados entre Almacenes y Descuento de Stock en Facturación",
    "category": "Inventario & Logística",
    "tags": [
      "Galpones",
      "Inventario",
      "Traslados",
      "ADMIN_GALPON",
      "TRABAJADOR_GALPON",
      "RLS",
      "Pruebas Automatizadas"
    ],
    "summary": "Construcción completa del módulo de almacenes: dos roles nuevos para operar galpones sin ver precios ni ventas, flujo de traslados entre galpones con aprobación y doble sellado (despacho y llegada), descuento automático de existencia al facturar con bloqueo de venta si no alcanza el stock y una auditoría consolidada de movimientos para el consorcio.",
    "highlights": [
      "Dos Roles Nuevos (ADMIN_GALPON y TRABAJADOR_GALPON): Cuentas que solo ven existencias de mercancía, nunca precios ni cifras de venta; el administrador de galpón además aprueba traslados y gestiona a sus trabajadores",
      "Flujo de Traslados entre Galpones: Un trabajador solicita el envío, el administrador de origen aprueba (descuenta existencia en ese momento), un trabajador sella el despacho físico y el galpón destino sella la llegada anotando lo realmente recibido — si llega menos de lo enviado, la diferencia queda registrada como pérdida y no vuelve a origen",
      "Bloqueo por Existencia Insuficiente: Ya no se puede solicitar ni aprobar un traslado por más mercancía de la que existe en ese momento en el galpón de origen, con aviso claro en el formulario y una segunda verificación atómica al aprobar por si el stock cambió mientras tanto",
      "Facturación Conectada al Inventario: Las facturas emitidas desde una sede con galpón asociado descuentan existencia automáticamente y bloquean la venta completa si algún producto no alcanza, evitando vender lo que no hay en físico",
      "Administración de Sede con Más Peso: El Administrador de Sede ahora también puede gestionar el galpón de su sede y crear o desactivar cuentas de administrador/trabajador de galpón, reflejando que tiene más autoridad operativa que ambos",
      "Auditoría Consolidada (/admin/auditoria): Vista para el consorcio y la empresa con todos los movimientos de inventario de todos los galpones juntos, con filtros por galpón, tipo de movimiento y rango de fechas",
      "Pulido de Experiencia: Reemplazo de los diálogos nativos del navegador por un modal propio con el estilo de la marca, buscador de productos con autocompletado en la factura, y corrección de un bug donde las cantidades con decimales se mostraban como si fueran miles (ej. \"40.000\" se leía como cuarenta mil en vez de 40 unidades)",
      "102 Pruebas Automatizadas: Ciclo completo de traslados (solicitar → aprobar → sellar despacho → sellar llegada), permisos por cada paso, bloqueo por falta de stock al solicitar y al aprobar, y descuento de inventario en facturación"
    ],
    "screenshots": [
      {
        "url": "assets/uploads/nexus-admin-galpones-crear-sede.png",
        "caption": "Creación de Galpón: el Jefe de Consorcio elige la sede asociada (una sede admite a lo sumo un galpón) o lo deja independiente"
      },
      {
        "url": "assets/uploads/nexus-admin-galpones-empresa.png",
        "caption": "Gestión de Galpones desde el Administrador de Empresa: mismo panel, mismo alcance de creación y desactivación"
      },
      {
        "url": "assets/uploads/nexus-admin-cajeros.png",
        "caption": "Gestión de Cajeros: alta de cajero por sede y caja por defecto, con listado filtrable por sede"
      },
      {
        "url": "assets/uploads/nexus-admin-sede-auditoria.png",
        "caption": "Auditoría de Inventario desde el Administrador de Sede: nuevo permiso para ver los movimientos de su galpón con filtros por tipo y fecha"
      },
      {
        "url": "assets/uploads/nexus-pos-factura-selector.png",
        "caption": "Terminal de Caja: factura con productos cargados, cada uno descontará existencia del galpón al emitir"
      },
      {
        "url": "assets/uploads/nexus-galpon-admin-aprobar-sellar.png",
        "caption": "Administrador de Galpón: bandeja de traslados con acciones directas de \"Aprobar\" y \"Sellar despacho\" según el estado"
      },
      {
        "url": "assets/uploads/nexus-galpon-entrada-buscador.png",
        "caption": "Entrada de Mercancía: buscador de producto con la existencia actual visible antes de registrar la carga"
      },
      {
        "url": "assets/uploads/nexus-galpon-movimientos-completo.png",
        "caption": "Historial de Movimientos: entradas, ajustes y traslados de salida con motivo, responsable y fecha de cada uno"
      },
      {
        "url": "assets/uploads/nexus-galpon-modal-confirmacion.png",
        "caption": "Confirmación de Despacho: el diálogo nativo del navegador fue reemplazado por un modal propio con el estilo de la marca"
      }
    ]
  },
  {
    "id": "dia-6",
    "date": "2026-09-27",
    "dayNumber": 6,
    "title": "Administración de Usuarios y Roles, Seguridad entre Empresas, Motor de Cálculo Fiscal y Pruebas del Sistema",
    "category": "Seguridad & Administración",
    "tags": [
      "Usuarios y Roles",
      "Seguridad",
      "Multi-Empresa",
      "Cálculo Fiscal",
      "Tasa BCV & IGTF",
      "Pruebas Automatizadas",
      "Auditoría"
    ],
    "summary": "Nuevo panel para gestionar usuarios y permisos por sede, protección de contraseñas entre empresas del consorcio, simplificación de roles para evitar confusiones operativas, cálculo automático y exacto de facturas en bolívares y dólares, y batería de pruebas para garantizar el correcto funcionamiento del sistema.",
    "highlights": [
      "Gestión de Usuarios y Accesos (/admin/usuarios): Pantalla para crear, activar, desactivar y cambiar claves de administradores de empresa y administradores de sede, asegurando que cada persona tenga acceso únicamente a las sucursales que le corresponden",
      "Protección de Cuentas Compartidas: Sistema de seguridad que detecta si un usuario trabaja en más de una empresa del grupo para evitar que un administrador cambie su clave por error y afecte el acceso en sus otros puestos",
      "Roles Claros y Simplificados: Depuración de perfiles de usuario dejando únicamente los 4 roles formales (Jefe de Consorcio, Administrador de Empresa, Administrador de Sede y Cajero), facilitando la asignación de permisos sin confusiones",
      "Detalle Completo de Empresa (/admin/empresas/[id]): Ficha administrativa donde el Jefe de Consorcio puede consultar en un solo lugar todas las sedes, cajas registradoras y personal que opera en cada filial",
      "Cálculo Fiscal Exacto y Sincronizado: Motor matemático que calcula en tiempo real los totales de la factura (IVA 16%, 8%, exento e IGTF 3%) y convierte montos entre Bolívares y Dólares con la tasa oficial BCV, garantizando que el monto que ve el cajero coincida al centavo con el registro fiscal",
      "Batería de Pruebas de Calidad (Vitest): Pruebas automáticas que simulan ventas simultáneas, apertura de cajas y cálculo de impuestos para verificar la estabilidad del sistema antes de su puesta en marcha"
    ],
    "screenshots": [
      {
        "url": "assets/uploads/nexus-admin-usuarios.png",
        "caption": "Gestión de Usuarios y Roles: Creación y asignación de permisos de acceso con selección de sede física"
      },
      {
        "url": "assets/uploads/nexus-admin-detalle-empresa.png",
        "caption": "Ficha de Empresa: Detalle de sedes, cajas registradoras, ventas recientes y acceso administrativo directo"
      },
      {
        "url": "assets/uploads/nexus-pos-factura-autopartes.png",
        "caption": "Terminal de Caja POS: Formulario de venta con cálculo automático de IVA 16%, totalización en Bolívares y Dólares a tasa BCV"
      },
      {
        "url": "assets/uploads/nexus-admin-jefes-consorcio.png",
        "caption": "Jefes de Consorcio: Panel de control y administración para superadministradores con acceso global"
      },
      {
        "url": "assets/uploads/nexus-consorcio-empresas-lista.png",
        "caption": "Empresas del Consorcio: Vista general de las empresas activas con resumen de sedes, cajas y ventas"
      }
    ]
  },
  {
    "id": "dia-5",
    "date": "2026-09-26",
    "dayNumber": 5,
    "title": "Consorcio Multi-Empresa, Gestión de Sedes y Cajas, Rol ADMIN_SEDE y Automatización BCV",
    "category": "Multi-Empresa & Administración",
    "tags": [
      "Multi-Empresa",
      "Jefe de Consorcio",
      "Sedes y Cajas",
      "ADMIN_SEDE",
      "RBAC",
      "pg_cron BCV",
      "Auditoría Facturas",
      "UI/UX"
    ],
    "summary": "Implementación del panel de administración multi-empresa para el Jefe de Consorcio, conmutador de filiales en tiempo real, gestión jerárquica de sucursales físicas y puntos de emisión con aislamiento estricto (nuevo rol ADMIN_SEDE), sincronización automatizada de la tasa oficial BCV y renovación del listado de facturación.",
    "highlights": [
      "Panel de Control Consorcio (Superadmin): Dashboard macro con métricas consolidadas en tiempo real (Ventas de hoy en Bs y USD referencial, acumulado de 7 días, total de empresas, sedes y cajas activas)",
      "Switcher de Contexto en Caliente: Conmutador desplegable en el header superior para alternar instantáneamente entre empresas del consorcio (PROQUIMICOS, DISTRIBUIDORA CENTRO, etc.) manteniendo activa la sesión y respetando el tenant activo",
      "Módulo de Sedes y Cajas: Creación y supervisión de sucursales físicas, configuración de cajas con códigos de punto de emisión fiscal (001) y asignación operativa de cajeros",
      "Nuevo Rol ADMIN_SEDE y Aislamiento Estricto (015_rol_admin_sede.sql): Reforzamiento del esquema RBAC con un rol exclusivo para administradores de sede, confinando la visibilidad y gestión de cajeros, cajas y reportes estrictamente a su sucursal",
      "Automatización Programada de Tasa BCV (014_cron_tasa_bcv.sql): Cron job a nivel de base de datos para consulta y registro recurrente del tipo de cambio oficial, con badge dinámico en cabecera y botón de refresco",
      "Rediseño del Listado de Facturación (/documentos): Resumen consolidado de emisión diaria, enlaces directos a correlativos fiscales, trazabilidad por sede, caja y cajero en turno, más botón de Pantalla Completa (F11) para operación continua"
    ],
    "screenshots": [
      {
        "url": "assets/uploads/nexus-consorcio-empresas-dashboard.png",
        "caption": "Consorcio Multi-Empresa: Dashboard global con ventas consolidadas en Bs y USD, métricas por empresa y selector de contexto en caliente"
      },
      {
        "url": "assets/uploads/nexus-admin-sedes-cajas.png",
        "caption": "Administración de Sedes y Cajas: Panel de alta y supervisión de sucursales físicas, puntos de emisión fiscal y cajeros asignados"
      },
      {
        "url": "assets/uploads/nexus-facturas-listado-auditoria.png",
        "caption": "Listado y Auditoría de Facturación: Trazabilidad de documentos emitidos con desglose por sede, punto de emisión, cajero responsable y totales"
      }
    ]
  },
  {
    "id": "dia-4",
    "date": "2026-09-23",
    "dayNumber": 4,
    "title": "Terminal de Caja POS, Flujo Rápido de Cobro e Integración Fiscal con Impresora BIXOLON",
    "category": "Frontend POS & Impresión Fiscal",
    "tags": [
      "Terminal Caja",
      "POS",
      "BIXOLON SRP-350/812",
      "Impresión Fiscal",
      "SENIAT",
      "UX Cajero",
      "Atajos de Teclado",
      "Multimoneda & IGTF"
    ],
    "summary": "Optimización integral de la interfaz del cajero para agilizar la facturación en punto de venta, diseño de plantilla de ticket fiscal según normativas SENIAT e integración directa con impresoras fiscales BIXOLON.",
    "highlights": [
      "Terminal de Caja Optimizado (POS): Nueva vista ágil para cajero con atajos de teclado rápidos (F2 Nuevo Cliente, F3 Agregar Producto, F9 Procesar Pago) diseñada para alto volumen de despacho",
      "Modal de Cobro y Liquidación Rápida: Flujo en dos pasos con cálculo automático en Bolívares y Divisas (Tasa BCV en vivo), soporte para Punto/Débito, Pago Móvil, Transferencia, Efectivo y recargo IGTF (+3%)",
      "Plantilla y Diseño de Factura Fiscal 80mm: Formato de ticket térmico homologado según especificaciones del SENIAT con desglose de alícuotas (16%, 8%, exento), RIF, datos del receptor y pie de máquina fiscal (MF)",
      "Integración de Impresión Fiscal BIXOLON: Protocolo de comunicación con impresoras fiscales BIXOLON SRP-350 y SRP-812 con confirmación de emisión exitosa, re-impresión inmediata [P] y enlace directo al ERP",
      "Experiencia Operativa Cero Fricción: Navegación por teclado completa ([Enter / Espacio] para emitir siguiente factura, [Esc] para regresar) maximizando la velocidad de atención en caja"
    ],
    "screenshots": [
      {
        "url": "assets/uploads/factura-proquimicos-carga.png",
        "caption": "Terminal de Caja POS: Interfaz optimizada para cajero con selección rápida de cliente, tasa BCV en vivo y atajos de función"
      },
      {
        "url": "assets/uploads/factura-proquimicos-cobro.png",
        "caption": "Módulo de Liquidación y Cobro: Modal rápido con selección de método de pago (Punto / Débito, Pago Móvil, Divisas con IGTF) y referencia bancaria"
      },
      {
        "url": "assets/uploads/factura-proquimicos-preview.png",
        "caption": "Preview de Impresión Fiscal BIXOLON: Ticket fiscal SENIAT 80mm generado con éxito, comandos de re-impresión y emisión continua"
      }
    ]
  },
  {
    "id": "avance-3",
    "date": "2026-09-22",
    "dayNumber": 3,
    "title": "Arquitectura de Backend: Sistema RBAC de Roles, Pooler PgBouncer y Seguridad RLS",
    "category": "Backend & Infraestructura DB",
    "tags": [
      "PostgreSQL",
      "RLS",
      "RBAC",
      "Seguridad",
      "Supabase Pooler",
      "Auth.js",
      "Server Actions",
      "Auditoría"
    ],
    "summary": "Consolidación integral de la capa de backend: arquitectura de roles y permisos (RBAC), endurecimiento de políticas RLS multi-tenant en PostgreSQL, gestión de transacciones concurrentes con pooler de conexiones y logs de auditoría inmutables.",
    "highlights": [
      "Matriz de Roles y Permisos (RBAC): Configuración de roles de Administrador, Supervisor de Caja, Cajero/Operador y Auditor con validación a nivel de middleware y base de datos",
      "Aislamiento RLS Multi-Tenant: Políticas RLS estrictas en PostgreSQL basadas en empresa_id y sucursal_id con bloqueo total de fugas entre empresas",
      "Contexto de Sesión conTenant(): Inyección atómica de SET LOCAL app.current_tenant y SET LOCAL app.current_user para transacciones de cobro y emisión",
      "Optimización del Connection Pooler: Configuración en Transaction Mode con PgBouncer para garantizar alta concurrencia en múltiples cajas simultáneas",
      "Trazabilidad y Auditoría (audit_logs): Tabla inmutable de logs para registrar cada creación, anulación, cobro con IGTF y ajuste de inventario",
      "Guardias de Server Actions: Validación de esquemas con Zod y verificación de claims de sesión antes de ejecutar mutaciones críticas"
    ],
    "screenshots": []
  },
  {
    "id": "dia-2",
    "date": "2026-09-20",
    "dayNumber": 2,
    "title": "MVP en Next.js 16, Migraciones PostgreSQL con RLS y Motor de Correlativos",
    "category": "Fullstack & Base de Datos",
    "tags": [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "RLS",
      "Supabase",
      "Auth.js",
      "TailwindCSS",
      "Vitest"
    ],
    "summary": "Construcción completa del MVP funcional con Next.js 16, TypeScript, Tailwind v4 y base de datos Supabase/PostgreSQL con seguridad RLS estricta y asignación atómica de correlativos fiscales.",
    "highlights": [
      "Migraciones DB (000 a 012): Roles con nexus_app, políticas RLS por empresa_id, unicidad de punto de emisión y ajustes de pooler",
      "Autenticación Auth.js multi-empresa con cambio de contexto activo en vivo sin necesidad de re-login",
      "Transacciones con conTenant() inyectando SET LOCAL para aislamiento estricto que falla cerrado",
      "Asignador atómico de correlativos fiscales con UPDATE ... RETURNING para evitar huecos en numeración",
      "Pantallas operativas: Login, Dashboard con KPIs del día, Listado y Vista de Documento en dos fases (Carga y Cobro)",
      "Integración de tasa BCV en tiempo real y pruebas automatizadas de aislamiento y concurrencia (Vitest)"
    ],
    "screenshots": [
      {
        "url": "assets/uploads/nexus-dashboard-kpis.png",
        "caption": "Dashboard Principal Nexus: KPIs en tiempo real, tasa BCV y listado de últimos documentos (PROQUIMICOS, C.A.)"
      },
      {
        "url": "assets/uploads/nexus-factura-items-cabecera.png",
        "caption": "Emisión de Documento: Encabezado de factura, selección de cliente y captura rápida de productos"
      },
      {
        "url": "assets/uploads/nexus-factura-totales-pie.png",
        "caption": "Detalle de Factura: Grilla de ítems con cantidades, precios en USD/Bs y barra de totales con atajos de teclado"
      },
      {
        "url": "assets/uploads/nexus-factura-modulo-cobro.png",
        "caption": "Módulo de Cobro: Formas de pago (Transferencia), desglose fiscal de base imponible, IVA 16% y saldo cuadrado"
      }
    ]
  },
  {
    "id": "dia-1",
    "date": "2026-09-19",
    "dayNumber": 1,
    "title": "Análisis de Requerimientos, Arquitectura Multi-Empresa e Identidad de Marca Nexus",
    "category": "Arquitectura & Diseño UI",
    "tags": [
      "Arquitectura",
      "MultiTenant",
      "PostgreSQL",
      "UI/UX",
      "Branding",
      "Requerimientos"
    ],
    "summary": "Definición integral de especificaciones funcionales, modelo de datos multi-tenant, reglas fiscales/RLS y diseño de identidad de marca Nexus Facturación.",
    "highlights": [
      "Análisis de requerimientos: Tenancy con aislamiento D1 por empresa_id, consolidación y multimoneda con tasa congelada",
      "Documentación técnica: Estrategia de asignación de correlativos (D5), matriz de riesgos y máquina de estados",
      "Diseño de UI e identidad: Maquetas de login claro/oscuro y especímenes tipográficos para caja",
      "Diseño vectorial: Creación de isotipos y logotipos de Nexus Facturación y Proquímicos",
      "Modelado relacional inicial para empresas, sucursales, puntos de emisión, usuarios, catálogos y documentos"
    ],
    "screenshots": [
      {
        "url": "assets/uploads/login-caja-nexus-claro.png",
        "caption": "Maqueta de interfaz de Login Caja Nexus en Modo Claro"
      }
    ]
  }
];

// Elementos DOM
const postsContainer = document.getElementById('postsContainer');
const emptyState = document.getElementById('emptyState');
const searchInput = document.getElementById('searchInput');
const clearSearchBtn = document.getElementById('clearSearchBtn');
const viewToggleBtn = document.getElementById('viewToggleBtn');
const viewToggleIcon = document.getElementById('viewToggleIcon');
const viewToggleText = document.getElementById('viewToggleText');
const themeToggleBtn = document.getElementById('themeToggleBtn');
const themeIcon = document.getElementById('themeIcon');
const postsCountBadge = document.getElementById('postsCountBadge');
const statDaysCount = document.getElementById('statDaysCount');
const statScreenshotsCount = document.getElementById('statScreenshotsCount');
const resetFiltersBtn = document.getElementById('resetFiltersBtn');

const lightboxModal = document.getElementById('lightboxModal');
const lightboxOverlay = document.getElementById('lightboxOverlay');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');
const lightboxPrevBtn = document.getElementById('lightboxPrevBtn');
const lightboxNextBtn = document.getElementById('lightboxNextBtn');

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  loadPosts();
  setupEventListeners();
});

async function loadPosts() {
  try {
    const res = await fetch('data/posts.json?v=' + Date.now());
    if (!res.ok) throw new Error('No se pudo cargar posts.json');
    const data = await res.json();
    state.posts = Array.isArray(data) && data.length > 0 ? data : FALLBACK_POSTS;
  } catch (err) {
    console.warn('Cargando datos locales garantizados:', err);
    state.posts = FALLBACK_POSTS;
  }

  state.posts.sort((a, b) => (b.dayNumber || 0) - (a.dayNumber || 0));

  updateStats();
  renderPosts();
}

function updateStats() {
  const totalPosts = state.posts.length;
  let totalScreenshots = 0;

  state.posts.forEach(post => {
    if (post.screenshots && Array.isArray(post.screenshots)) {
      totalScreenshots += post.screenshots.length;
    }
  });

  if (postsCountBadge) postsCountBadge.textContent = totalPosts + (totalPosts === 1 ? ' avance registrado' : ' avances registrados');
  if (statDaysCount) statDaysCount.textContent = totalPosts;
  if (statScreenshotsCount) statScreenshotsCount.textContent = totalScreenshots;
}

function renderPosts() {
  const filtered = state.posts.filter(post => {
    const matchesTag = state.currentTag === 'all' || (post.tags && post.tags.includes(state.currentTag));

    const query = state.searchQuery.toLowerCase().trim();
    if (!query) return matchesTag;

    const inTitle = (post.title || '').toLowerCase().includes(query);
    const inSummary = (post.summary || '').toLowerCase().includes(query);
    const inCategory = (post.category || '').toLowerCase().includes(query);
    const inTags = (post.tags || []).some(t => t.toLowerCase().includes(query));
    const inHighlights = (post.highlights || []).some(h => h.toLowerCase().includes(query));

    return matchesTag && (inTitle || inSummary || inCategory || inTags || inHighlights);
  });

  if (filtered.length === 0) {
    postsContainer.innerHTML = '';
    emptyState.style.display = 'block';
    return;
  }

  emptyState.style.display = 'none';
  postsContainer.className = state.viewMode === 'grid' ? 'grid-view' : 'timeline-view';

  postsContainer.innerHTML = filtered.map(post => {
    const highlightsHtml = post.highlights && post.highlights.length > 0 ?
      '<div class="highlights-block"><div class="highlights-title"><i class="fa-solid fa-list-check"></i> Logros & Tareas Realizadas</div><ul class="highlights-list">' +
      post.highlights.map(item => '<li><i class="fa-solid fa-check"></i> <span>' + item + '</span></li>').join('') +
      '</ul></div>' : '';

    const screenshotsHtml = post.screenshots && post.screenshots.length > 0 ?
      '<div class="gallery-block"><div class="gallery-grid">' +
      post.screenshots.map((ss, idx) =>
        '<div class="screenshot-card" data-post-id="' + post.id + '" data-ss-index="' + idx + '">' +
        '<img src="' + ss.url + '" alt="' + (ss.caption || 'Captura de pantalla') + '" loading="lazy" onerror="this.src=\'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80\'">' +
        '<div class="screenshot-overlay">' +
        '<div class="zoom-icon-badge"><i class="fa-solid fa-magnifying-glass-plus"></i></div>' +
        '<div class="screenshot-caption-text">' + (ss.caption || 'Ver captura completa') + '</div>' +
        '</div></div>'
      ).join('') +
      '</div></div>' : '';

    return '<article class="timeline-item" id="post-' + post.id + '">' +
      '<div class="timeline-node"></div>' +
      '<div class="post-card">' +
      '<header class="post-header">' +
      '<div class="post-meta-left">' +
      '<span class="day-badge">AVANCE #' + (post.dayNumber || 0) + '</span>' +
      '<span class="date-text"><i class="fa-regular fa-calendar"></i> ' + formatDate(post.date) + '</span>' +
      (post.category ? '<span class="post-category">' + post.category + '</span>' : '') +
      '</div>' +
      '</header>' +
      '<h2 class="post-title">' + post.title + '</h2>' +
      '<p class="post-summary">' + post.summary + '</p>' +
      highlightsHtml +
      screenshotsHtml +
      '</div>' +
      '</article>';
  }).join('');

  attachScreenshotEvents();
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  const parts = dateStr.split('-');
  if (parts.length === 3) {
    const d = new Date(parts[0], parts[1] - 1, parts[2]);
    return d.toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' });
  }
  return dateStr;
}

function attachScreenshotEvents() {
  document.querySelectorAll('.screenshot-card').forEach(card => {
    card.addEventListener('click', () => {
      const postId = card.getAttribute('data-post-id');
      const ssIndex = parseInt(card.getAttribute('data-ss-index'), 10);
      const post = state.posts.find(p => p.id === postId);
      if (post && post.screenshots && post.screenshots[ssIndex]) {
        openLightbox(post.screenshots, ssIndex);
      }
    });
  });
}

function openLightbox(screenshots, index) {
  state.lightboxImages = screenshots;
  state.currentLightboxIndex = index;
  updateLightboxImage();
  lightboxModal.classList.add('active');
  lightboxModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function updateLightboxImage() {
  const current = state.lightboxImages[state.currentLightboxIndex];
  if (!current) return;
  lightboxImg.src = current.url;
  lightboxCaption.textContent = current.caption || ('Captura ' + (state.currentLightboxIndex + 1) + ' de ' + state.lightboxImages.length);

  lightboxPrevBtn.style.display = state.lightboxImages.length > 1 ? 'flex' : 'none';
  lightboxNextBtn.style.display = state.lightboxImages.length > 1 ? 'flex' : 'none';
}

function closeLightbox() {
  lightboxModal.classList.remove('active');
  lightboxModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function nextLightbox() {
  if (state.lightboxImages.length <= 1) return;
  state.currentLightboxIndex = (state.currentLightboxIndex + 1) % state.lightboxImages.length;
  updateLightboxImage();
}

function prevLightbox() {
  if (state.lightboxImages.length <= 1) return;
  state.currentLightboxIndex = (state.currentLightboxIndex - 1 + state.lightboxImages.length) % state.lightboxImages.length;
  updateLightboxImage();
}

function setupEventListeners() {
  searchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    clearSearchBtn.style.display = state.searchQuery ? 'block' : 'none';
    renderPosts();
  });

  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    state.searchQuery = '';
    clearSearchBtn.style.display = 'none';
    renderPosts();
  });

  resetFiltersBtn.addEventListener('click', () => {
    searchInput.value = '';
    state.searchQuery = '';
    clearSearchBtn.style.display = 'none';
    state.currentTag = 'all';
    renderPosts();
  });

  viewToggleBtn.addEventListener('click', () => {
    state.viewMode = state.viewMode === 'timeline' ? 'grid' : 'timeline';
    if (state.viewMode === 'grid') {
      viewToggleIcon.className = 'fa-solid fa-table-cells-large';
      viewToggleText.textContent = 'Cuadrícula';
    } else {
      viewToggleIcon.className = 'fa-solid fa-timeline';
      viewToggleText.textContent = 'Timeline';
    }
    renderPosts();
  });

  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('devlog_theme', newTheme);
    updateThemeIcon(newTheme);
  });

  lightboxCloseBtn.addEventListener('click', closeLightbox);
  lightboxOverlay.addEventListener('click', closeLightbox);
  lightboxNextBtn.addEventListener('click', nextLightbox);
  lightboxPrevBtn.addEventListener('click', prevLightbox);

  document.addEventListener('keydown', (e) => {
    if (lightboxModal.classList.contains('active')) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextLightbox();
      if (e.key === 'ArrowLeft') prevLightbox();
    }
  });
}

function initTheme() {
  const savedTheme = localStorage.getItem('devlog_theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
}

function updateThemeIcon(theme) {
  if (theme === 'dark') {
    themeIcon.className = 'fa-solid fa-sun';
  } else {
    themeIcon.className = 'fa-solid fa-moon';
  }
}
