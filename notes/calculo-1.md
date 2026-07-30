# Cálculo 1 — Limites, Derivadas e Integrais

> Anotações completas da disciplina de Cálculo Diferencial e Integral I.
> Cobre os três grandes blocos do curso: **limites e continuidade**,
> **derivadas** e **integrais**, com definições, propriedades, regras,
> exemplos resolvidos e aplicações.

---

## 1. Funções — revisão rápida

Antes de limites, vale relembrar o vocabulário:

- **Domínio**: conjunto de valores de `x` para os quais `f(x)` está definida.
- **Imagem (contradomínio efetivo)**: conjunto de valores que `f(x)` assume.
- **Função par**: `f(-x) = f(x)` (simétrica em relação ao eixo y). Ex.: `f(x) = x²`.
- **Função ímpar**: `f(-x) = -f(x)` (simétrica em relação à origem). Ex.: `f(x) = x³`.
- **Função composta**: `(f ∘ g)(x) = f(g(x))`.
- **Função inversa**: `f⁻¹(f(x)) = x`, existe apenas se `f` for bijetora (ou restrita a um intervalo onde seja).

Funções importantes para o curso: polinomiais, racionais, exponenciais (`aˣ`),
logarítmicas (`log_a x`), trigonométricas (`sen x`, `cos x`, `tan x`) e
trigonométricas inversas.

---

## 2. Limites

### 2.1 Ideia intuitiva

O limite de `f(x)` quando `x` tende a `a` é o valor para o qual `f(x)` se
aproxima conforme `x` se aproxima de `a` — **sem necessariamente** que `f(a)`
exista ou seja igual a esse valor.

```
lim (x→a) f(x) = L
```

### 2.2 Definição formal (ε–δ)

```
lim (x→a) f(x) = L  ⟺  ∀ ε > 0, ∃ δ > 0 tal que
                        0 < |x - a| < δ  ⟹  |f(x) - L| < ε
```

> Em português: para qualquer margem de erro `ε` que eu exigir no valor de
> `f(x)`, existe uma proximidade `δ` de `x` em relação a `a` que garante
> essa margem.

### 2.3 Limites laterais

- **Limite pela direita**: `lim (x→a⁺) f(x)`
- **Limite pela esquerda**: `lim (x→a⁻) f(x)`

O limite bilateral existe **se e somente se** os dois limites laterais
existirem e forem iguais:

```
lim (x→a) f(x) = L  ⟺  lim (x→a⁻) f(x) = lim (x→a⁺) f(x) = L
```

Isso é usado principalmente para funções definidas por partes e para
verificar continuidade em pontos de "quebra".

### 2.4 Propriedades operatórias

Se `lim (x→a) f(x) = L` e `lim (x→a) g(x) = M`, então:

| Propriedade | Resultado |
|---|---|
| Soma | `lim [f(x) + g(x)] = L + M` |
| Diferença | `lim [f(x) - g(x)] = L - M` |
| Produto | `lim [f(x) · g(x)] = L · M` |
| Quociente (M ≠ 0) | `lim [f(x) / g(x)] = L / M` |
| Potência | `lim [f(x)]ⁿ = Lⁿ` |
| Constante | `lim [k · f(x)] = k · L` |

### 2.5 Indeterminações

Formas que **não** podem ser resolvidas por substituição direta e exigem
manipulação algébrica ou outras técnicas (fatoração, racionalização,
L'Hôpital):

```
0/0    ∞/∞    ∞ - ∞    0 · ∞    1^∞    0^0    ∞^0
```

**Exemplo clássico (fatoração):**

```
lim (x→2) (x² - 4)/(x - 2)
= lim (x→2) (x-2)(x+2)/(x-2)
= lim (x→2) (x+2)
= 4
```

**Exemplo com racionalização:**

```
lim (x→0) (√(x+1) - 1)/x

Multiplicando por (√(x+1)+1)/(√(x+1)+1):

= lim (x→0) [(x+1) - 1] / [x(√(x+1)+1)]
= lim (x→0) x / [x(√(x+1)+1)]
= lim (x→0) 1/(√(x+1)+1)
= 1/2
```

### 2.6 Limites fundamentais (trigonométrico e exponencial)

Dois limites que aparecem o tempo todo e valem a pena memorizar:

```
lim (x→0) sen(x)/x = 1

lim (x→∞) (1 + 1/x)^x = e   (≈ 2,71828...)

lim (x→0) (1 + x)^(1/x) = e
```

### 2.7 Limites no infinito e assíntotas

- **Assíntota horizontal**: existe se `lim (x→±∞) f(x) = L` (finito).
- **Assíntota vertical**: existe em `x = a` se `lim (x→a) f(x) = ±∞`.

Para funções racionais `P(x)/Q(x)`, compare os graus de `P` e `Q`:

| Comparação de graus | Comportamento no infinito |
|---|---|
| grau(P) < grau(Q) | `lim = 0` (assíntota horizontal em y=0) |
| grau(P) = grau(Q) | `lim = razão dos coeficientes líderes` |
| grau(P) > grau(Q) | `lim = ±∞` (sem assíntota horizontal) |

### 2.8 Continuidade

`f` é contínua em `x = a` se **todas** as três condições valem:

1. `f(a)` está definida
2. `lim (x→a) f(x)` existe
3. `lim (x→a) f(x) = f(a)`

**Tipos de descontinuidade:**

- **Removível**: o limite existe, mas é diferente de `f(a)` (ou `f(a)` não
  existe) — dá pra "consertar" redefinindo o ponto.
- **De salto**: os limites laterais existem, mas são diferentes.
- **Infinita**: a função tende a `±∞` perto do ponto (assíntota vertical).

**Teorema do Valor Intermediário (TVI)**: se `f` é contínua em `[a, b]` e
`k` está entre `f(a)` e `f(b)`, então existe `c ∈ [a, b]` tal que `f(c) = k`.
Muito usado para provar existência de raízes.

---

## 3. Derivadas

### 3.1 Definição

A derivada de `f` em `x = a` é o limite:

```
f'(a) = lim (h→0) [f(a+h) - f(a)] / h
```

Geometricamente: é a **inclinação da reta tangente** ao gráfico de `f` no
ponto `(a, f(a))`. Fisicamente: é a **taxa de variação instantânea** de `f`
em relação a `x` (ex.: velocidade é a derivada da posição).

Notações equivalentes: `f'(x)`, `dy/dx`, `Df(x)`, `ẏ` (notação de Newton,
usada em física para derivada temporal).

### 3.2 Diferenciabilidade e continuidade

> Toda função diferenciável em um ponto é contínua nesse ponto — mas a
> recíproca é **falsa**. `f(x) = |x|` é contínua em `x = 0` mas não é
> diferenciável ali (as derivadas laterais são diferentes: -1 e +1).

### 3.3 Regras básicas de derivação

| Função | Derivada |
|---|---|
| `f(x) = k` (constante) | `f'(x) = 0` |
| `f(x) = xⁿ` | `f'(x) = n·xⁿ⁻¹` (regra do tombo) |
| `f(x) = eˣ` | `f'(x) = eˣ` |
| `f(x) = aˣ` | `f'(x) = aˣ · ln(a)` |
| `f(x) = ln(x)` | `f'(x) = 1/x` |
| `f(x) = sen(x)` | `f'(x) = cos(x)` |
| `f(x) = cos(x)` | `f'(x) = -sen(x)` |
| `f(x) = tan(x)` | `f'(x) = sec²(x)` |

### 3.4 Regras operatórias

```
(f ± g)' = f' ± g'                              [regra da soma/diferença]

(f · g)' = f'·g + f·g'                          [regra do produto]

(f / g)' = (f'·g - f·g') / g²                   [regra do quociente]

(f ∘ g)'(x) = f'(g(x)) · g'(x)                  [regra da cadeia]
```

**Exemplo — regra da cadeia:**

```
f(x) = sen(x²)
f'(x) = cos(x²) · 2x = 2x·cos(x²)
```

**Exemplo — regra do produto:**

```
f(x) = x² · eˣ
f'(x) = 2x·eˣ + x²·eˣ = eˣ(2x + x²)
```

**Exemplo — regra do quociente:**

```
f(x) = sen(x)/x
f'(x) = [cos(x)·x - sen(x)·1] / x² = [x·cos(x) - sen(x)] / x²
```

### 3.5 Derivação implícita

Usada quando `y` não está isolado em função de `x` (ex.: `x² + y² = 25`).
Deriva-se ambos os lados em relação a `x`, tratando `y` como `y(x)` e
aplicando a regra da cadeia sempre que `y` aparecer.

```
x² + y² = 25
2x + 2y·(dy/dx) = 0
dy/dx = -x/y
```

### 3.6 Derivadas de ordem superior

`f''(x)` é a derivada da derivada (taxa de variação da inclinação — ligada
à concavidade). `f'''(x)`, `f⁽⁴⁾(x)`, etc. seguem o mesmo princípio.

Interpretação física: se `s(t)` é posição, `s'(t)` é velocidade e `s''(t)`
é aceleração.

### 3.7 Aplicações de derivadas

**Reta tangente** em `x = a`:

```
y - f(a) = f'(a)·(x - a)
```

**Análise de crescimento/decrescimento:**

- `f'(x) > 0` em um intervalo ⟹ `f` é crescente ali
- `f'(x) < 0` em um intervalo ⟹ `f` é decrescente ali

**Pontos críticos**: onde `f'(x) = 0` ou `f'(x)` não existe. Candidatos a
máximo/mínimo local.

**Teste da segunda derivada** num ponto crítico `x = c`:

| `f''(c)` | Classificação |
|---|---|
| `> 0` | mínimo local (concavidade para cima) |
| `< 0` | máximo local (concavidade para baixo) |
| `= 0` | inconclusivo — usar teste da primeira derivada |

**Concavidade e pontos de inflexão**: `f''(x) > 0` ⟹ côncava para cima;
`f''(x) < 0` ⟹ côncava para baixo. Ponto de inflexão é onde a concavidade
muda de sinal.

**Problemas de otimização** — roteiro geral:

1. Identifique a variável a otimizar e escreva a função objetivo
2. Escreva a(s) restrição(ões) e use pra deixar tudo em uma única variável
3. Derive, iguale a zero e resolva (pontos críticos)
4. Confirme se é máximo ou mínimo (2ª derivada ou análise de sinal)
5. Verifique os extremos do domínio, se houver

**Regra de L'Hôpital** — para indeterminações `0/0` ou `∞/∞`:

```
lim (x→a) f(x)/g(x) = lim (x→a) f'(x)/g'(x)   (se o lado direito existir)
```

> **Anote aqui**: exercícios resolvidos das suas listas, exemplos de
> otimização específicos da disciplina (área máxima, custo mínimo etc.).

---

## 4. Integrais

### 4.1 Antiderivada (integral indefinida)

`F` é uma antiderivada de `f` se `F'(x) = f(x)`. A integral indefinida
representa **todas** as antiderivadas:

```
∫ f(x) dx = F(x) + C
```

onde `C` é a constante de integração (qualquer antiderivada difere de
outra por uma constante).

### 4.2 Regras básicas de integração

| Integral | Resultado |
|---|---|
| `∫ k dx` | `kx + C` |
| `∫ xⁿ dx` (n ≠ -1) | `xⁿ⁺¹/(n+1) + C` |
| `∫ (1/x) dx` | `ln\|x\| + C` |
| `∫ eˣ dx` | `eˣ + C` |
| `∫ aˣ dx` | `aˣ/ln(a) + C` |
| `∫ sen(x) dx` | `-cos(x) + C` |
| `∫ cos(x) dx` | `sen(x) + C` |
| `∫ sec²(x) dx` | `tan(x) + C` |

**Propriedades:**

```
∫ [f(x) ± g(x)] dx = ∫ f(x) dx ± ∫ g(x) dx

∫ k·f(x) dx = k · ∫ f(x) dx
```

### 4.3 Técnicas de integração

**Substituição (regra da cadeia ao contrário):**

```
∫ 2x·cos(x²) dx     [seja u = x², du = 2x dx]
= ∫ cos(u) du
= sen(u) + C
= sen(x²) + C
```

**Integração por partes:**

```
∫ u dv = uv - ∫ v du
```

Regra prática pra escolher `u` (sigla LIATE — Logarítmica, Inversa
trigonométrica, Algébrica, Trigonométrica, Exponencial, nessa ordem de
prioridade):

```
∫ x·eˣ dx     [u = x, dv = eˣ dx  ⟹  du = dx, v = eˣ]
= x·eˣ - ∫ eˣ dx
= x·eˣ - eˣ + C
= eˣ(x - 1) + C
```

**Frações parciais**: usada para integrar funções racionais decompondo em
frações mais simples com denominadores lineares ou quadráticos.

**Substituição trigonométrica**: usada em integrais com `√(a²-x²)`,
`√(a²+x²)` ou `√(x²-a²)`, trocando `x` por `a·sen(θ)`, `a·tan(θ)` ou
`a·sec(θ)` respectivamente.

### 4.4 Integral definida

```
∫ₐᵇ f(x) dx
```

Representa a área líquida (com sinal) entre o gráfico de `f` e o eixo `x`,
de `x=a` até `x=b`. Definida formalmente como o limite das somas de Riemann:

```
∫ₐᵇ f(x) dx = lim (n→∞) Σᵢ f(xᵢ*) · Δx
```

### 4.5 Teorema Fundamental do Cálculo (TFC)

O elo entre derivadas e integrais — provavelmente o resultado mais
importante do curso.

**Parte 1**: se `F(x) = ∫ₐˣ f(t) dt`, então `F'(x) = f(x)`.

**Parte 2** (regra prática para calcular integrais definidas): se `F` é
uma antiderivada de `f`,

```
∫ₐᵇ f(x) dx = F(b) - F(a)
```

**Exemplo:**

```
∫₀^π sen(x) dx = [-cos(x)]₀^π = -cos(π) - (-cos(0)) = -(-1) - (-1) = 2
```

### 4.6 Propriedades da integral definida

```
∫ₐᵃ f(x) dx = 0

∫ₐᵇ f(x) dx = -∫ᵇₐ f(x) dx

∫ₐᵇ f(x) dx = ∫ₐᶜ f(x) dx + ∫ᶜᵇ f(x) dx     (aditividade em intervalos)
```

### 4.7 Aplicações da integral

**Área entre curvas** (`f(x) ≥ g(x)` em `[a,b]`):

```
A = ∫ₐᵇ [f(x) - g(x)] dx
```

**Volume de sólido de revolução** — método dos discos, girando em torno do
eixo x:

```
V = π ∫ₐᵇ [f(x)]² dx
```

**Valor médio de uma função** em `[a,b]`:

```
f_méd = (1/(b-a)) · ∫ₐᵇ f(x) dx
```

> **Anote aqui**: exercícios de área entre curvas e volumes de revolução
> resolvidos passo a passo, além de aplicações físicas vistas em aula
> (trabalho, centro de massa etc.).

---

## 5. Erros comuns (checklist rápido de revisão)

- Esquecer a constante `+ C` na integral indefinida
- Confundir `f'(x) = 0` com "é máximo" — sempre confirmar com o teste da
  2ª derivada ou análise de sinal
- Aplicar a regra do produto/quociente errado (trocar sinal na regra do
  quociente é o erro mais comum)
- Esquecer a regra da cadeia ao derivar função composta (ex.: derivar
  `sen(x²)` como `cos(x²)` sem multiplicar por `2x`)
- Trocar limite lateral por limite bilateral sem checar se os dois lados
  batem
- Na substituição de integrais, esquecer de trocar também os limites de
  integração (no caso de integral definida) ou de voltar pra variável
  original (no caso de integral indefinida)

---

## Referências

- Stewart, J. *Cálculo, Volume 1*.
- Guidorizzi, H. L. *Um Curso de Cálculo, Volume 1*.
- Material de aula — [complete com a disciplina/professor]
