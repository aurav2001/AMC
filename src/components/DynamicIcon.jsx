import { getIcon } from '../utils/iconLibrary';
import { HelpCircle } from 'lucide-react';

const DynamicIcon = ({ name, className = "w-6 h-6", fallback = true }) => {
    const IconComponent = getIcon(name);

    if (!IconComponent) {
        if (fallback) {
            return <HelpCircle className={className} />;
        }
        return null;
    }

    return <IconComponent className={className} />;
};

export default DynamicIcon;
