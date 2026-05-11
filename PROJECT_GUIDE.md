# Ótica Muribeca Prime - Landing Page

## 📋 Visão Geral do Projeto

Landing page de luxo para a Ótica Muribeca Prime, uma boutique de óculos premium em João Pessoa, Brasil. O site apresenta consultoria de visagismo personalizada, coleção curada de marcas premium e atendimento exclusivo.

### Características Principais

- **Hero Section**: Imagem de fundo luxuosa com overlay gradiente e CTA flutuante
- **Visagismo**: Seção interativa explicando consultoria de rosto com cards de features
- **Galeria de Produtos**: Showcase de armações premium com hover effects
- **Depoimentos**: Avaliações de clientes reais com star ratings
- **Contato**: Seção de conversão com WhatsApp e Instagram links
- **Navegação Fixa**: Header responsivo com smooth scroll
- **Scroll to Top**: Botão flutuante para retornar ao topo

## 🎨 Design System

### Paleta de Cores (Organic Luxury Modernism)

- **Fundo**: Marfim quente (#F5F1E8)
- **Texto**: Carvão (#2B2B2B)
- **Destaque Ouro**: Ouro quente (#D4A574)
- **Destaque Verde**: Sage suave (#A8B8A8)

### Tipografia

- **Headlines**: Cormorant Garamond (serif, elegante)
- **Body**: Inter (sans-serif, legível)

### Animações

- Fade-in on scroll (0.8s, ease-out)
- Hover effects com scale e glow
- Parallax scrolling em seções principais
- Smooth scroll behavior em toda a página

## 📁 Estrutura de Arquivos

```
client/
  src/
    components/
      Header.tsx              # Navegação fixa com mobile menu
      Hero.tsx                # Hero section com imagem de fundo
      Visagismo.tsx           # Seção de consultoria
      Gallery.tsx             # Galeria de produtos
      Testimonials.tsx        # Depoimentos de clientes
      Contact.tsx             # Seção de contato e CTA
      Footer.tsx              # Rodapé com links
      ScrollToTop.tsx         # Botão scroll to top
    pages/
      Home.tsx                # Página principal
    index.css                 # Estilos globais e design tokens
    App.tsx                   # Roteamento e ThemeProvider
  index.html                  # HTML com Google Fonts e meta tags
```

## 🚀 Desenvolvimento

### Instalação

```bash
cd /home/ubuntu/otica-muribeca-prime
pnpm install
```

### Executar Dev Server

```bash
pnpm run dev
```

O site estará disponível em `http://localhost:3000`

### Build para Produção

```bash
pnpm run build
```

## 🔧 Personalizações Recomendadas

### 1. Atualizar Informações de Contato

Edite os seguintes arquivos:

- **Header.tsx**: Atualize o link WhatsApp
- **Contact.tsx**: Atualize número de telefone e WhatsApp
- **Footer.tsx**: Atualize email e telefone

### 2. Adicionar Google Analytics

Descomente o bloco GTAG em `client/index.html` e adicione seu ID:

```html
<!-- Google Ads Tag (GTAG) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_GA_ID');
</script>
```

### 3. Adicionar Facebook Pixel

Descomente o bloco Facebook Pixel em `client/index.html`:

```html
<!-- Facebook Pixel -->
<script>
  !function(f){if(!f.fbq)f.fbq=function(){f.fbq.callMethod?
  f.fbq.callMethod.apply(f.fbq,arguments):f.fbq.queue.push(arguments)}}
  window._fbq=window._fbq||[];window.fbq=window.fbq||function(){window._fbq.push(arguments)};
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

### 4. Atualizar Imagens

As imagens de alta qualidade já estão hospedadas na CDN. Se desejar substituir:

1. Gere novas imagens com `generate_image`
2. Atualize as URLs nos componentes (Hero.tsx, Visagismo.tsx, Gallery.tsx)

### 5. Customizar Depoimentos

Edite o array `testimonials` em `Testimonials.tsx` com avaliações reais de clientes.

### 6. Adicionar Mais Produtos à Galeria

Expanda o array `products` em `Gallery.tsx` com novos itens.

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

Testado em:
- iPhone 12/13/14
- iPad Pro
- Desktop (1920x1080)

## ⚡ Performance

- **Core Web Vitals**: Otimizado
- **Imagens**: Comprimidas em WebP
- **Animações**: Usando Framer Motion com GPU acceleration
- **Scroll Performance**: Smooth scroll com passive listeners

## 🔐 SEO

- Meta tags descritivas
- Open Graph tags para compartilhamento social
- Estrutura semântica HTML
- Mobile-friendly design

## 📞 Contato e Suporte

**Ótica Muribeca Prime**
- Endereço: Av. Pres. Epitácio Pessoa, 3280 - Sala 103, João Pessoa - PB
- Horário: Seg-Sex 9h30-17h | Sab 8h-12h
- Instagram: @oticamuribeca

## 📄 Licença

Projeto proprietário. Todos os direitos reservados à Ótica Muribeca Prime.

---

**Desenvolvido com ❤️ usando React, Tailwind CSS e Framer Motion**
