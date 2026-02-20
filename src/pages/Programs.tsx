import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { programs } from '../data/programs';
import { Clock, Layers } from 'lucide-react';

export default function Programs() {
  return (
    <Layout>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Program Terpandu</h1>
        <p className="text-lg text-muted-foreground">Pilih program yang sesuai dengan tujuan Anda dan mulailah perjalanan Anda.</p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {programs.map((program) => (
          <Link to={`/program/${program.id}`} key={program.id} className="group block rounded-xl border bg-card text-card-foreground shadow-sm overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
            <div className="relative">
              <img src={program.image} alt={program.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black/60 to-transparent w-full p-4">
                <h2 className="text-xl font-bold text-white">{program.emoji} {program.title}</h2>
              </div>
            </div>
            <div className="p-6">
              <p className="text-muted-foreground mb-4 h-10">{program.description}</p>
              <div className="flex justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Layers size={16} />
                  <span>{program.category}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{program.duration}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
}
