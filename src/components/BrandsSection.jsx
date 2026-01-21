import { motion } from 'framer-motion';
import { useContent } from '../context/ContentContext';

const BrandsSection = ({ data }) => {
    const { content } = useContent();
    // Use provided data, or fallback to home brands, or empty object
    const brandsData = data || content.home?.brands || { list: [] };
    const { title = "Brands We Support", subtitle = "Expert service for all major hardware brands.", list = [] } = brandsData;

    return (
        <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-slate-900 mb-3"
                    >
                        {title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-slate-600"
                    >
                        {subtitle}
                    </motion.p>
                </div>

                {/* Brands Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-3 md:gap-4"
                >
                    {list.map((brand, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.03 }}
                            whileHover={{ scale: 1.05, boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
                            className="px-6 py-3 bg-white rounded-full shadow-sm border border-slate-100 hover:border-primary-200 transition-all cursor-pointer"
                        >
                            <span className="font-semibold text-slate-700 hover:text-primary-600 transition-colors">
                                {brand.name}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Decorative accent line */}
                <div className="mt-12 flex justify-center">
                    <div className="w-32 h-1 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full" />
                </div>
            </div>
        </section>
    );
};

export default BrandsSection;
