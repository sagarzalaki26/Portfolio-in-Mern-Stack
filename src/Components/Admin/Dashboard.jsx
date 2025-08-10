// src/components/Admin/Dashboard.jsx
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import ManageProjects from './ManageProjects';
import ManageCertificates from './ManageCertificates';
import ManageSkills from './ManageSkills';
import { FaBars } from 'react-icons/fa';

export default function Dashboard({ onLogout }) {
    const [active, setActive] = useState('projects');
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const renderActive = () => {
        if (active === 'projects') return <ManageProjects />;
        if (active === 'certificates') return <ManageCertificates />;
        if (active === 'skills') return <ManageSkills />;
        return null;
    };

    return (
        <div id='' className="min-h-screen bg-gray-900 text-white">
            {/* Topbar for mobile */}
            <header className="md:hidden flex items-center justify-between p-4 border-b border-gray-800">
                <div className="flex items-center gap-3">
                    <button onClick={() => setShowMobileMenu(s => !s)} className="p-2 bg-gray-800 rounded">
                        <FaBars />
                    </button>
                    <h1 className="font-bold">Admin Panel</h1>
                </div>
                <div className="flex gap-2">
                    <button onClick={onLogout} className="px-3 py-1 bg-red-600 rounded">Logout</button>
                </div>
            </header>

            <div className="flex">
                {/* Sidebar - visible on md+ */}
                <Sidebar active={active} setActive={setActive} onLogout={onLogout} />

                {/* Mobile slideover menu */}
                {showMobileMenu && (
                    <div
                        className="md:hidden fixed inset-0 z-40 bg-black/60"
                        onClick={() => setShowMobileMenu(false)}
                    >
                        <div
                            className="absolute left-0 top-0 h-full w-64 bg-gray-900 p-4 overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Sidebar
                                active={active}
                                setActive={(id) => {
                                    setActive(id);
                                    setShowMobileMenu(false);
                                }}
                                onLogout={onLogout}
                            />
                        </div>
                    </div>
                )}



                {/* Main content */}
                <main className="flex-1 p-6">
                    <div className="max-w-5xl mx-auto">
                        {renderActive()}
                    </div>
                </main>
            </div>
        </div>
    );
}
