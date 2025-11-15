# Guia de Personalização do Portfólio

Bem-vindo ao seu portfólio! Este guia ajudará você a personalizar o conteúdo com seus próprios projetos e informações.

## Passo 1: Editar Informações Pessoais

### Título do Portfólio
Acesse o painel de **Settings** → **General** no Management UI e altere o **Website name** (VITE_APP_TITLE) para o nome que deseja exibir.

### Logo
Atualize o arquivo `client/src/const.ts` e altere a constante `APP_LOGO` para apontar para sua logo:

```typescript
export const APP_LOGO = "/seu-logo.svg"; // ou .png, .jpg
```

Depois, atualize o favicon através do Management UI → Settings → General.

## Passo 2: Adicionar Seus Projetos

### Editar Projetos Concluídos
Abra o arquivo `client/src/data/projects.ts` e modifique o array `completedProjects`:

```typescript
export const completedProjects: Project[] = [
  {
    id: "seu-id-1",
    title: "Título do Seu Projeto",
    description: "Descrição detalhada do projeto",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "https://seu-projeto.com",
    github: "https://github.com/seu-usuario/seu-projeto",
  },
  // Adicione mais projetos aqui
];
```

### Editar Projetos em Desenvolvimento
Modifique o array `developmentProjects` com o mesmo formato, adicionando:

```typescript
export const developmentProjects: DevelopmentProject[] = [
  {
    id: "dev-seu-id",
    title: "Projeto em Desenvolvimento",
    description: "Descrição do projeto",
    technologies: ["React", "TypeScript"],
    progress: 50, // Percentual de progresso (0-100)
    status: "in-progress", // "planning", "in-progress", ou "paused"
    estimatedCompletion: "Mês Ano",
    github: "https://github.com/seu-usuario/seu-projeto",
  },
];
```

## Passo 3: Atualizar Seção de Contato

Na página `client/src/pages/Home.tsx`, procure pela seção **Contact Section** e atualize:

- **Email**: Altere `seu-email@example.com` para seu email real
- **GitHub**: Altere o link para seu perfil do GitHub
- **LinkedIn**: Altere o link para seu perfil do LinkedIn

```typescript
<a href="mailto:seu-email-real@example.com" ...>
  <Mail className="w-5 h-5" />
  Email
</a>
```

## Passo 4: Personalizar Cores e Tema

O portfólio usa Tailwind CSS com tema claro por padrão. Para personalizar as cores:

1. Abra `client/src/index.css`
2. Modifique as variáveis CSS na seção `:root` para alterar as cores do tema

Exemplo de cores disponíveis para personalização:
- `--primary`: Cor principal (botões, destaques)
- `--secondary`: Cor secundária
- `--accent`: Cor de destaque
- `--background`: Cor de fundo
- `--foreground`: Cor do texto principal

## Passo 5: Adicionar Imagens aos Projetos

Para adicionar imagens aos projetos:

1. Coloque suas imagens na pasta `client/public/`
2. Adicione o campo `image` ao projeto em `projects.ts`:

```typescript
{
  id: "1",
  title: "Meu Projeto",
  description: "...",
  image: "/meu-projeto.png", // Referência absoluta
  // ... outros campos
}
```

3. Atualize o componente `ProjectCard.tsx` para exibir a imagem:

```typescript
{project.image && (
  <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-4" />
)}
```

## Passo 6: Publicar o Portfólio

1. Após fazer todas as alterações, clique em **Publish** no Management UI
2. Seu portfólio estará disponível em um domínio público
3. Você pode configurar um domínio customizado em **Settings** → **Domains**

## Dicas Úteis

- **Responsividade**: O portfólio é totalmente responsivo. Teste em dispositivos móveis!
- **Performance**: As imagens devem ter no máximo 1920×1080px para melhor performance
- **SEO**: Atualize as meta tags em `client/index.html` para melhorar o SEO
- **Animações**: Adicione transições suaves com classes Tailwind como `hover:shadow-lg transition-shadow`

## Estrutura de Arquivos Importantes

```
client/
  public/              ← Coloque suas imagens aqui
  src/
    pages/
      Home.tsx        ← Página principal (edite seção de contato)
    components/
      ProjectCard.tsx           ← Card para projetos concluídos
      DevelopmentProjectCard.tsx ← Card para projetos em desenvolvimento
    data/
      projects.ts     ← EDITE AQUI: Adicione seus projetos
    const.ts          ← Logo e título
    index.css         ← Cores e tema
```

## Precisa de Ajuda?

Se tiver dúvidas sobre como personalizar o portfólio, consulte:
- [Documentação Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui Components](https://ui.shadcn.com)
- [React Documentation](https://react.dev)

Divirta-se criando seu portfólio!
