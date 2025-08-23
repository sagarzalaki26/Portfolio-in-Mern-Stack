// src/components/Admin/Dashboard.jsx
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import ManageProjects from './ManageProjects';
import ManageCertificates from './ManageCertificates';
import ManageSkills from './ManageSkills';
import { FaBars } from 'react-icons/fa';

export default function Dashboard() {
    const [active, setActive] = useState('projects');
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const renderActive = () => {
        if (active === 'projects') return <ManageProjects />;
        if (active === 'certificates') return <ManageCertificates />;
        if (active === 'skills') return <ManageSkills />;
        return null;
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            {/* Topbar for mobile */}
            <header className="md:hidden flex items-center justify-between p-4 border-b border-gray-800">
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setShowMobileMenu(s => !s)}
                        className="p-2 bg-gray-800 rounded"
                    >
                        <FaBars />
                    </button>
                    <h1 className="font-bold">Admin Panel</h1>
                </div>

            </header>

            <div className="flex">
                {/* Sidebar - desktop only */}
                <div className="hidden md:block">
                    <Sidebar active={active} setActive={setActive} />
                </div>

                {/* Mobile slideover menu */}
                {showMobileMenu && (
                    <div
                        className="md:hidden fixed inset-0 z-40 flex"
                        onClick={() => setShowMobileMenu(false)}
                    >
                        {/* Overlay */}
                        <div className="fixed inset-0 bg-black/60"></div>

                        {/* Sidebar panel */}
                        <div
                            className="relative h-full w-64 bg-gray-900 p-4 overflow-y-auto transform transition-transform duration-300 ease-in-out translate-x-0"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Sidebar
                                active={active}
                                setActive={(id) => {
                                    setActive(id);
                                    setShowMobileMenu(false);
                                }}

                            />
                        </div>
                    </div>
                )}

                {/* Main content */}
                <main className="flex-1 p-6">
                    <div className="max-w-5xl mx-auto">
                        <div className="bg-gray-800 rounded-2xl shadow-lg p-6">
                            {renderActive()}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
