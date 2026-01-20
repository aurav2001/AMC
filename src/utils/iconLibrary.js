import {
    // Hardware & Devices
    Monitor, Laptop, Smartphone, Tablet, Server, HardDrive, Cpu, Printer, Tv, Speaker, Wifi, Router, Mouse, Keyboard,

    // Tools & Actions
    Wrench, Settings, RefreshCw, PenTool, Edit, Trash2, Save, Plus, Search, Menu, X, Download, Upload,

    // Status & Feedback
    Check, CheckCircle, AlertTriangle, AlertCircle, Info, ThumbsUp, Star, Award, Heart, Shield, Lock, Unlock,

    // Business & Analytics
    Briefcase, Users, TrendingUp, BarChart, PieChart, Activity, DollarSign, CreditCard,

    // Communication
    Phone, Mail, MessageSquare, Globe, MapPin, Calendar, Clock,

    // Abstract & UI
    Zap, Sparkles, Home, Layout, Grid, List, Image, Video, FileText, Database, Code, Terminal, Command, Cloud,

    // Navigation
    ArrowRight, ArrowLeft, ArrowUp, ArrowDown, ChevronRight, ChevronLeft, ChevronDown, ChevronUp, ExternalLink,

    // Essentials
    Headphones, LifeBuoy, HelpCircle, FileCheck
} from 'lucide-react';

export const iconLibrary = {
    // Hardware
    Monitor, Laptop, Smartphone, Tablet, Server, HardDrive, Cpu, Printer, Tv, Speaker, Wifi, Router, Mouse, Keyboard,

    // Tools
    Wrench, Settings, RefreshCw, PenTool, Edit, Trash2, Save, Plus, Search, Menu, X, Download, Upload,

    // Status
    Check, CheckCircle, AlertTriangle, AlertCircle, Info, ThumbsUp, Star, Award, Heart, Shield, Lock, Unlock,

    // Business
    Briefcase, Users, TrendingUp, BarChart, PieChart, Activity, DollarSign, CreditCard,

    // Communication
    Phone, Mail, MessageSquare, Globe, MapPin, Calendar, Clock,

    // Abstract
    Zap, Sparkles, Home, Layout, Grid, List, Image, Video, FileText, Database, Code, Terminal, Command, Cloud,

    // Navigation
    ArrowRight, ArrowLeft, ArrowUp, ArrowDown, ChevronRight, ChevronLeft, ChevronDown, ChevronUp, ExternalLink,

    // Essentials
    Headphones, LifeBuoy, HelpCircle, FileCheck
};

export const getIcon = (name) => {
    return iconLibrary[name] || null;
};
