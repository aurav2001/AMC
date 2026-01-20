import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const KeyboardShortcuts = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleKeyPress = (e) => {
            // Ctrl+G to go to admin dashboard
            if (e.ctrlKey && e.key === 'g') {
                e.preventDefault();
                // If already on admin page, go to dashboard, otherwise go to login
                if (location.pathname.startsWith('/admin')) {
                    navigate('/admin/dashboard');
                } else {
                    navigate('/admin');
                }
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [navigate, location]);

    return null;
};

export default KeyboardShortcuts;
