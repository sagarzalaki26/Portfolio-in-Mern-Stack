// src/components/Admin/storage.js
const read = (key, fallback = []) => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
};

const write = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const loadProjects = () => read('admin_projects', []);
export const saveProjects = (arr) => write('admin_projects', arr);

export const loadSkills = () => read('admin_skills', []);
export const saveSkills = (arr) => write('admin_skills', arr);

export const loadCertificates = () => read('admin_certificates', []);
export const saveCertificates = (arr) => write('admin_certificates', arr);
