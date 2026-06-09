# Skills — Local Rank Brasil

Repositório centralizado de skills para o workspace Local Rank Brasil.

## 📁 Estrutura

```
skills/
├── 🟢 LOCAL (Específicas do Opensquad)
│   ├── opensquad-agent-creator/    # Criador de agents
│   ├── opensquad-skill-creator/    # Criador de skills
│   └── template-designer/          # Designer de templates
│
├── 🔗 SUBMODULES (Externas - Sincronizadas)
│   ├── design-system/              (github.com/robonuggets/design-system)
│   ├── frontend-slides/            (github.com/zarazhangrui/frontend-slides)
│   ├── superpowers/                (github.com/obra/superpowers)
│   ├── ui-ux-pro-max/              (github.com/nextlevelbuilder/ui-ux-pro-max-skill)
│   ├── impeccable/                 (github.com/pbakaus/impeccable)
│   ├── npxskillui/                 (github.com/amaancoderx/npxskillui)
│   ├── webgpu-claude-skill/        (github.com/dgreenheck/webgpu-claude-skill)
│   ├── awesome-design-md/          (github.com/VoltAgent/awesome-design-md)
│   ├── taste-skill/                (github.com/Leonxlnx/taste-skill)
│   └── playwright-cli/             (github.com/microsoft/playwright-cli)
│
└── .gitmodules                      # Configuração de submodules
```

## 🔄 Submodules

Skills externas são gerenciadas como **Git submodules**, mantendo sincronização com os repositórios originais.

### Clonar com Submodules

```bash
git clone --recurse-submodules https://github.com/localrankbrasil/skills.git
```

### Atualizar Submodules

```bash
# Atualizar todos
git submodule update --remote

# Atualizar um específico
git submodule update --remote design-system
```

### Adicionar Nova Skill External

```bash
git submodule add https://github.com/user/skill-name.git skill-name
git commit -m "Add skill-name as submodule"
git push
```

## 📝 Skills Locais

### opensquad-agent-creator
Skill para criar agents automaticamente para Opensquad.

### opensquad-skill-creator
Skill para criar outras skills.

### template-designer
Skill para design de templates.

## 🔗 Skills Externas

Cada skill externa é um repositório Git independente. Você pode:

1. **Usar como referência** — Estudar e copiar padrões
2. **Integrar em projetos** — Usar em squads
3. **Atualizar do original** — `git submodule update --remote`

## 🚀 Como Usar Skills em Squads

### Referenciar skill local

```yaml
agents:
  - name: "Designer"
    skills:
      - "skills/template-designer"
```

### Referenciar skill externa

```yaml
agents:
  - name: "Frontend Developer"
    skills:
      - "skills/frontend-slides"
      - "skills/design-system"
```

## 📦 Sincronização com GitHub

O repositório está sempre sincronizado com:
- Código local (`opensquad-agent-creator`, etc)
- Submodules (skills externas)

Commits incluem ambos:

```bash
# Fazer mudanças em skill local
cd opensquad-skill-creator/
# ... editar files ...

# Voltar para root
cd ..

# Commit
git add opensquad-skill-creator/
git commit -m "Update opensquad-skill-creator"
git push
```

## 🔍 Listar Skills

```bash
# Listar todas as skills
ls -1

# Verificar status dos submodules
git submodule foreach git status
```

## 🛠️ Troubleshooting

### "Submodule not found"

```bash
git submodule update --init --recursive
```

### Submodule desatualizado

```bash
git submodule update --remote --merge
```

### Deletar submodule

```bash
git submodule deinit -f -- skills/[name]
git rm -f skills/[name]
git commit -m "Remove [name] submodule"
```

## 📚 Referências

| Link | Descrição |
|---|---|
| [git-submodule](https://git-scm.com/docs/git-submodule) | Documentação oficial |
| [Opensquad](../opensquad/README.md) | Framework principal |
| [CLAUDE.md](../CLAUDE.md) | Instruções do workspace |

---

**Última atualização:** 2026-06-09
**Repositório:** https://github.com/localrankbrasil/skills
