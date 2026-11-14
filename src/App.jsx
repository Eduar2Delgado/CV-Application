import { useState } from 'react';
import './App.css';

const initialData = {
  general: {
    nombre: '',
    correo: '',
    telefono: '',
  },
  education: {
    institucion: '',
    titulacion: '',
    periodo: '',
  },
  experience: {
    empresa: '',
    puesto: '',
    periodo: '',
    descripcion: '',
  },
};

function App() {
  const [formData, setFormData] = useState(initialData);
  const [draftData, setDraftData] = useState(initialData);
  const [btnInfoG, setBtnInfoG] = useState(true);
  const [btnEducation, setBtnEducation] = useState(true);
  const [btnExperience, setBtnExperience] = useState(true);

  const editInfoHandleClick = () => {
    if (btnInfoG) {
      setDraftData((prev) => ({
        ...prev,
        general: { ...formData.general },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        general: { ...draftData.general },
      }));
    }
    setBtnInfoG((prev) => !prev);
  };

  const editEducationHandleClick = () => {
    if (btnEducation) {
      setDraftData((prev) => ({
        ...prev,
        education: { ...formData.education },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        education: { ...draftData.education },
      }));
    }
    setBtnEducation((prev) => !prev);
  };

  const editExperienceHandleClick = () => {
    if (btnExperience) {
      setDraftData((prev) => ({
        ...prev,
        experience: { ...formData.experience },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        experience: { ...draftData.experience },
      }));
    }
    setBtnExperience((prev) => !prev);
  };

  const handleFieldChange = (section, field) => (event) => {
    const { value } = event.target;

    setDraftData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const previewSections = [
    {
      title: 'Información General',
      fields: [
        { label: 'Nombre completo', value: formData.general.nombre },
        { label: 'Correo electrónico', value: formData.general.correo },
        { label: 'Teléfono', value: formData.general.telefono },
      ],
    },
    {
      title: 'Educación',
      fields: [
        { label: 'Institución', value: formData.education.institucion },
        { label: 'Titulación', value: formData.education.titulacion },
        { label: 'Período', value: formData.education.periodo },
      ],
    },
    {
      title: 'Experiencia',
      fields: [
        { label: 'Empresa', value: formData.experience.empresa },
        { label: 'Puesto', value: formData.experience.puesto },
        { label: 'Período', value: formData.experience.periodo },
        { label: 'Descripción', value: formData.experience.descripcion },
      ],
    },
  ];

  return (
    <>
      <section className="app-shell">
        <div className="container">
          <header>
            <h1>CV Builder</h1>
            <p>Create your CV by filling out the sections.</p>
          </header>

          <div className="inputContainer">
            <div className={`cv-card${btnInfoG ? '' : ' cv-card--editing'}`}>
              <div className="card-header">
                <h1>Información General</h1>
                {btnInfoG ? (
                  <span className="badge badge--preview">Vista previa</span>
                ) : (
                  <span className="badge badge--edit">Modo edición</span>
                )}
              </div>

              <div className="card-body">
                {btnInfoG ? (
                  <div className="grid">
                    <div className="grid-item">
                      <span>Nombre Completo</span>
                      <p>{formData.general.nombre}</p>
                    </div>
                    <div className="grid-item">
                      <span>Correo Electrónico</span>
                      <p>{formData.general.correo}</p>
                    </div>
                    <div className="grid-item">
                      <span>Teléfono</span>
                      <p>{formData.general.telefono}</p>
                    </div>
                  </div>
                ) : (
                  <div className="grid">
                    <div className="grid-item">
                      <span>Nombre Completo</span>
                      <input
                        type="text"
                        id="input-nombre"
                        className="field-input"
                        data-section="general"
                        data-field="nombre"
                        value={draftData.general.nombre}
                        onChange={handleFieldChange('general', 'nombre')}
                        placeholder="Eduardo Andrés Rojas"
                      />
                    </div>
                    <div className="grid-item">
                      <span>Correo Electrónico</span>
                      <input
                        type="text"
                        id="input-correo"
                        className="field-input"
                        data-section="general"
                        data-field="correo"
                        value={draftData.general.correo}
                        onChange={handleFieldChange('general', 'correo')}
                        placeholder="juan@ejemplo.com"
                      />
                    </div>
                    <div className="grid-item">
                      <span>Teléfono</span>
                      <input
                        type="text"
                        id="input-telefono"
                        className="field-input"
                        data-section="general"
                        data-field="telefono"
                        value={draftData.general.telefono}
                        onChange={handleFieldChange('general', 'telefono')}
                        placeholder="+34 600 000 000"
                      />
                    </div>
                  </div>
                )}
              </div>
              <div className="card-actions">
                <button type="button" onClick={editInfoHandleClick} className={`btn-action${btnInfoG ? '' : ' btn-action-save'}`}>
                  {btnInfoG ? 'Editar' : 'Guardar'}
                </button>
              </div>
            </div>

            <div className={`cv-card${btnEducation ? '' : ' cv-card--editing'}`}>
              <div className="card-header">
                <h1>Educación</h1>
                {btnEducation ? (
                  <span className="badge badge--preview">Vista previa</span>
                ) : (
                  <span className="badge badge--edit">Modo edición</span>
                )}
              </div>

              <div className="card-body">
                {btnEducation ? (
                  <div className="grid">
                    <div className="grid-item">
                      <span>Institución</span>
                      <p>{formData.education.institucion}</p>
                    </div>
                    <div className="grid-item">
                      <span>Titulación</span>
                      <p>{formData.education.titulacion}</p>
                    </div>
                    <div className="grid-item">
                      <span>Período</span>
                      <p>{formData.education.periodo}</p>
                    </div>
                  </div>
                ) : (
                  <div className="grid">
                    <div className="grid-item">
                      <span>Institución</span>
                      <input
                        type="text"
                        id="input-institucion"
                        className="field-input"
                        data-section="education"
                        data-field="institucion"
                        value={draftData.education.institucion}
                        onChange={handleFieldChange('education', 'institucion')}
                        placeholder="Universidad de Diseño"
                      />
                    </div>
                    <div className="grid-item">
                      <span>Titulación</span>
                      <input
                        type="text"
                        id="input-titulacion"
                        className="field-input"
                        data-section="education"
                        data-field="titulacion"
                        value={draftData.education.titulacion}
                        onChange={handleFieldChange('education', 'titulacion')}
                        placeholder="Ingeniería de Software"
                      />
                    </div>
                    <div className="grid-item">
                      <span>Período</span>
                      <input
                        type="text"
                        id="input-periodo-educacion"
                        className="field-input"
                        data-section="education"
                        data-field="periodo"
                        value={draftData.education.periodo}
                        onChange={handleFieldChange('education', 'periodo')}
                        placeholder="2018-2022"
                      />
                    </div>
                  </div>
                )}
              </div>
              <div className="card-actions">
                <button type="button" onClick={editEducationHandleClick} className={`btn-action${btnEducation ? '' : ' btn-action-save'}`}>
                  {btnEducation ? 'Editar' : 'Guardar'}
                </button>
              </div>
            </div>

            <div className={`cv-card${btnExperience ? '' : ' cv-card--editing'}`}>
              <div className="card-header">
                <h1>Experiencia</h1>
                {btnExperience ? (
                  <span className="badge badge--preview">Vista previa</span>
                ) : (
                  <span className="badge badge--edit">Modo edición</span>
                )}
              </div>

              <div className="card-body">
                {btnExperience ? (
                  <div className="grid">
                    <div className="grid-item">
                      <span>Empresa</span>
                      <p>{formData.experience.empresa}</p>
                    </div>
                    <div className="grid-item">
                      <span>Puesto</span>
                      <p>{formData.experience.puesto}</p>
                    </div>
                    <div className="grid-item">
                      <span>Período</span>
                      <p>{formData.experience.periodo}</p>
                    </div>
                    <div className="grid-item">
                      <span>Descripción</span>
                      <p>{formData.experience.descripcion}</p>
                    </div>
                  </div>
                ) : (
                  <div className="grid">
                    <div className="grid-item">
                      <span>Empresa</span>
                      <input
                        type="text"
                        id="input-empresa"
                        className="field-input"
                        data-section="experience"
                        data-field="empresa"
                        value={draftData.experience.empresa}
                        onChange={handleFieldChange('experience', 'empresa')}
                        placeholder="Agencia Creativa"
                      />
                    </div>
                    <div className="grid-item">
                      <span>Puesto</span>
                      <input
                        type="text"
                        id="input-puesto"
                        className="field-input"
                        data-section="experience"
                        data-field="puesto"
                        value={draftData.experience.puesto}
                        onChange={handleFieldChange('experience', 'puesto')}
                        placeholder="UX Designer"
                      />
                    </div>
                    <div className="grid-item">
                      <span>Período</span>
                      <input
                        type="text"
                        id="input-periodo-experiencia"
                        className="field-input"
                        data-section="experience"
                        data-field="periodo"
                        value={draftData.experience.periodo}
                        onChange={handleFieldChange('experience', 'periodo')}
                        placeholder="2022-2024"
                      />
                    </div>
                    <div className="grid-item">
                      <span>Descripción</span>
                      <textarea
                        id="input-descripcion"
                        className="field-textarea"
                        data-section="experience"
                        data-field="descripcion"
                        value={draftData.experience.descripcion}
                        onChange={handleFieldChange('experience', 'descripcion')}
                        placeholder="Diseño de interfaces web y prototipado."
                      />
                    </div>
                  </div>
                )}
              </div>
              <div className="card-actions">
                <button type="button" onClick={editExperienceHandleClick} className={`btn-action${btnExperience ? '' : ' btn-action-save'}`}>
                  {btnExperience ? 'Editar' : 'Guardar'}
                </button>
              </div>
            </div>
          </div>

          <div className="displayContainer cv-card">
            <div className="card-header">
              <h1>Vista previa</h1>
            </div>
            <div className="card-body">
              {previewSections.map(({ title, fields }) => {
                const filledFields = fields.filter(({ value }) => value.trim());

                if (filledFields.length === 0) {
                  return null;
                }

                return (
                  <section className="preview-section" key={title}>
                    <h2>{title}</h2>
                    <div className="grid">
                      {filledFields.map(({ label, value }) => (
                        <div className="grid-item" key={label}>
                          <span>{label}</span>
                          <p>{value}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;

