import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, message });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Sparkles" size={24} className="text-white" />
              </div>
              <span className="text-2xl font-bold text-gradient">Envariax</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">Home</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">About</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">Services</a>
              <a href="#products" className="text-foreground hover:text-primary transition-colors font-medium">Products</a>
              <a href="#blog" className="text-foreground hover:text-primary transition-colors font-medium">Blog</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">Contact</a>
            </div>
            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Transforming Business with{' '}
                <span className="text-gradient">AI Innovation</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Envariax delivers cutting-edge artificial intelligence solutions that drive digital transformation and unlock new possibilities for your business.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  Explore Solutions
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline">
                  Watch Demo
                  <Icon name="Play" size={20} className="ml-2" />
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-gradient">500+</div>
                  <div className="text-sm text-muted-foreground">Projects Delivered</div>
                </div>
                <div className="h-12 w-px bg-border" />
                <div>
                  <div className="text-3xl font-bold text-gradient">98%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
                <div className="h-12 w-px bg-border" />
                <div>
                  <div className="text-3xl font-bold text-gradient">50+</div>
                  <div className="text-sm text-muted-foreground">AI Experts</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
              <img
                src="https://cdn.poehali.dev/projects/dec2b247-100c-4952-8c09-827ed14bdcb9/files/07adedf2-730c-4c6d-891e-2944926bf13b.jpg"
                alt="AI Innovation"
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-card">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              About <span className="text-gradient">Envariax</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We are a team of passionate technologists and innovators dedicated to building intelligent solutions that shape the future of business.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img
              src="https://cdn.poehali.dev/projects/dec2b247-100c-4952-8c09-827ed14bdcb9/files/43302169-3196-4695-954d-fc73a982da8e.jpg"
              alt="Our Team"
              className="rounded-2xl shadow-xl w-full"
            />
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Target" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To empower businesses with AI-driven solutions that enhance efficiency, innovation, and growth.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Eye" size={24} className="text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To be the global leader in AI innovation, creating transformative technologies for tomorrow.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Award" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Our Values</h3>
                  <p className="text-muted-foreground">
                    Innovation, integrity, excellence, and customer-centricity drive everything we do.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive AI and technology solutions tailored to your business needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: 'Brain',
                title: 'AI Consulting',
                description: 'Strategic guidance on implementing AI solutions that align with your business objectives.'
              },
              {
                icon: 'Code',
                title: 'Custom Development',
                description: 'Bespoke software solutions built with cutting-edge technologies and best practices.'
              },
              {
                icon: 'Database',
                title: 'Data Analytics',
                description: 'Transform raw data into actionable insights with advanced analytics and visualization.'
              },
              {
                icon: 'Cloud',
                title: 'Cloud Solutions',
                description: 'Scalable cloud infrastructure and migration services for modern businesses.'
              },
              {
                icon: 'Shield',
                title: 'Cybersecurity',
                description: 'Protect your digital assets with enterprise-grade security solutions.'
              },
              {
                icon: 'Zap',
                title: 'Automation',
                description: 'Streamline operations with intelligent process automation and workflows.'
              }
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card border-border">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon name={service.icon} size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="py-20 px-6 bg-card">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Our <span className="text-gradient">Products</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Innovative AI-powered products designed to revolutionize your workflow.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            {[
              {
                icon: 'Cpu',
                title: 'AI Vision Platform',
                description: 'Advanced computer vision solutions for image recognition, object detection, and visual analytics.',
                features: ['Real-time Processing', 'Custom Models', 'API Integration']
              },
              {
                icon: 'MessageSquare',
                title: 'Intelligent Chatbot',
                description: 'Natural language processing powered conversational AI for customer engagement and support.',
                features: ['Multi-language', '24/7 Availability', 'Context Aware']
              }
            ].map((product, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 bg-card border-border">
                <CardContent className="p-10">
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon name={product.icon} size={40} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{product.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{product.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.features.map((feature, i) => (
                      <span key={i} className="px-4 py-2 bg-muted rounded-full text-sm font-medium">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                    Learn More
                    <Icon name="ArrowRight" size={18} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Latest <span className="text-gradient">Insights</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Stay updated with the latest trends, insights, and news in AI and technology.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: 'AI Trends',
                title: 'The Future of Generative AI in Enterprise',
                date: 'Nov 15, 2025',
                readTime: '5 min read'
              },
              {
                category: 'Case Study',
                title: 'How We Helped TechCorp Automate 80% of Operations',
                date: 'Nov 12, 2025',
                readTime: '8 min read'
              },
              {
                category: 'Technology',
                title: 'Machine Learning Best Practices for 2025',
                date: 'Nov 8, 2025',
                readTime: '6 min read'
              }
            ].map((post, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card border-border overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                  <img
                    src="https://cdn.poehali.dev/projects/dec2b247-100c-4952-8c09-827ed14bdcb9/files/5b4be636-96f3-4eb3-adc6-990321941b07.jpg"
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="text-sm font-semibold text-primary mb-2">{post.category}</div>
                  <h3 className="text-xl font-bold mb-4 leading-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-card">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Get in <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Ready to transform your business with AI? Let's start a conversation.
            </p>
          </div>
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-background"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="bg-background resize-none"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  Send Message
                  <Icon name="Send" size={18} className="ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground text-background py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Sparkles" size={24} className="text-white" />
                </div>
                <span className="text-2xl font-bold">Envariax</span>
              </div>
              <p className="text-background/70 leading-relaxed">
                Transforming businesses with cutting-edge AI solutions and digital innovation.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Company</h4>
              <ul className="space-y-3">
                <li><a href="#about" className="text-background/70 hover:text-background transition-colors">About Us</a></li>
                <li><a href="#" className="text-background/70 hover:text-background transition-colors">Careers</a></li>
                <li><a href="#" className="text-background/70 hover:text-background transition-colors">Partners</a></li>
                <li><a href="#" className="text-background/70 hover:text-background transition-colors">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Resources</h4>
              <ul className="space-y-3">
                <li><a href="#blog" className="text-background/70 hover:text-background transition-colors">Blog</a></li>
                <li><a href="#" className="text-background/70 hover:text-background transition-colors">Documentation</a></li>
                <li><a href="#" className="text-background/70 hover:text-background transition-colors">Case Studies</a></li>
                <li><a href="#" className="text-background/70 hover:text-background transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Connect</h4>
              <div className="flex space-x-4 mb-6">
                <a href="#" className="w-10 h-10 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                  <Icon name="Twitter" size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                  <Icon name="Linkedin" size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                  <Icon name="Github" size={20} />
                </a>
              </div>
              <p className="text-background/70 text-sm">
                info@envariax.com<br />
                +1 (555) 123-4567
              </p>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-background/70 text-sm">
            <p>&copy; 2025 Envariax. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
