import React from 'react';
import './App.css';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { 
  Brain, 
  Award, 
  Clock, 
  Users, 
  Heart, 
  BookOpen, 
  Video, 
  CheckCircle,
  Calendar,
  Star
} from 'lucide-react';
import professorImage from './assets/darlan_santos_profile.png';

function App() {
  const benefits = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Compreensão Aprofundada",
      description: "Entenda as características do TEA de forma clara, atualizada e baseada em evidências."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Segurança na Ação",
      description: "Desenvolva a confiança necessária para agir de forma assertiva diante de comportamentos desafiadores."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Comunicação Eficaz",
      description: "Domine técnicas de comunicação e acolhimento que promovem a inclusão e o desenvolvimento."
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Intervenções Práticas",
      description: "Aplique estratégias eficazes e adaptáveis para o cotidiano da escola e do consultório."
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Parceria Colaborativa",
      description: "Fortaleça o trabalho em equipe com famílias e profissionais interdisciplinares."
    }
  ];

  const targetAudience = [
    "Professores da Educação Infantil e Ensino Fundamental",
    "Psicólogos, Fonoaudiólogos, Terapeutas Ocupacionais",
    "Educadores Físicos, Enfermeiros, Médicos",
    "Coordenadores Pedagógicos e Gestores Escolares",
    "Pais que buscam conhecimento técnico sobre TEA"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-green-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30">
              Curso Online e Ao Vivo
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Autismo na Prática
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
              Estratégias Essenciais de Acolhimento, Comunicação e Intervenção no Cotidiano Escolar e Clínico
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-sm">
                <Calendar className="w-5 h-5 text-primary" />
                <span className="font-semibold">Domingo, 14 de setembro</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-sm">
                <Clock className="w-5 h-5 text-primary" />
                <span className="font-semibold">14h às 18h</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-sm">
                <Video className="w-5 h-5 text-primary" />
                <span className="font-semibold">Ao vivo pelo Zoom</span>
              </div>
            </div>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Entrar na Lista de Espera Gratuita
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Você se sente despreparado para lidar com os desafios do TEA no dia a dia?
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Se você trabalha com crianças ou adolescentes com Transtorno do Espectro Autista (TEA) e busca 
            ferramentas práticas e eficazes para sua rotina, este curso foi cuidadosamente desenvolvido para 
            atender às suas necessidades. Em apenas 4 horas de imersão ao vivo, você terá a oportunidade de 
            aprofundar sua compreensão sobre o autismo, aprender a acolher de forma humanizada e aplicar 
            estratégias de intervenção comprovadas.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-secondary/5 to-accent/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              O Que Você Vai Conquistar com Este Curso
            </h3>
            <p className="text-lg text-gray-600">
              Transforme sua prática profissional com conhecimentos práticos e baseados em evidências
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white/80 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Para Quem é Este Curso?
            </h3>
            <p className="text-lg text-gray-600">
              Ideal para profissionais e pais dedicados à educação e saúde de crianças e adolescentes com TEA
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {targetAudience.map((audience, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-gray-700 font-medium">{audience}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professor Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30">
                Seu Professor
              </Badge>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Prof. Dr. Darlan Santos
              </h3>
              <div className="flex items-center gap-2 mb-6 justify-center lg:justify-start">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <span className="text-gray-600 font-medium">Mais de 20 anos de experiência</span>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Educador, pesquisador e especialista renomado em autismo. Coordenador de pós-graduação e 
                autor de diversos livros e artigos científicos nas áreas de desenvolvimento, comportamento 
                e inclusão. Dedica-se à formação de profissionais da saúde e educação, sempre com foco na 
                prática baseada em evidências.
              </p>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                <Badge variant="secondary">Coordenador de Pós-graduação</Badge>
                <Badge variant="secondary">Autor de Livros</Badge>
                <Badge variant="secondary">Pesquisador</Badge>
                <Badge variant="secondary">Especialista em TEA</Badge>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-8 border-white">
                  <img 
                    src={professorImage} 
                    alt="Prof. Dr. Darlan Santos" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-primary text-white p-3 rounded-full shadow-lg">
                  <Award className="w-8 h-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Detalhes do Curso
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center border-2 border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-primary">Certificado Incluso</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Certificado de 4 horas + material complementar exclusivo</p>
              </CardContent>
            </Card>
            <Card className="text-center border-2 border-secondary/20 hover:border-secondary/40 transition-colors">
              <CardHeader>
                <Video className="w-12 h-12 text-secondary mx-auto mb-4" />
                <CardTitle className="text-secondary">Ao Vivo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Interação direta com o professor via Zoom</p>
              </CardContent>
            </Card>
            <Card className="text-center border-2 border-accent/20 hover:border-accent/40 transition-colors">
              <CardHeader>
                <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-accent">Vagas Limitadas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Para garantir a qualidade do encontro</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary via-secondary to-accent text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-4xl font-bold mb-6">
            Garanta Sua Vaga na Lista de Espera!
          </h3>
          <p className="text-xl mb-8 opacity-90">
            As vagas são limitadas para garantir a qualidade do encontro ao vivo. 
            Entre gratuitamente na nossa lista de espera e seja um dos primeiros a receber 
            o link de inscrição com valor promocional exclusivo!
          </p>
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-gray-100 px-12 py-6 text-xl font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
          >
            Entrar na Lista de Espera Gratuita
          </Button>
          <p className="text-sm mt-4 opacity-75">
            ✓ Gratuito • ✓ Sem compromisso • ✓ Valor promocional exclusivo
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 text-white text-center">
        <p className="text-gray-400">
          © 2024 Autismo na Prática - Prof. Dr. Darlan Santos. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}

export default App;

