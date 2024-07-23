# Proiectul Meu
Acesta este un proiect Node.js care utilizează mai multe dependențe pentru a crea o aplicație web complet funcțională.

## Dependențe
### NPM

Pentru a instala dependențele necesare pentru acest proiect, utilizați următoarele comenzi:
```
npm install bootstrap dotenv ejs express express-session morgan
npm install --save-dev nodemon
```
### Python
Acest proiect utilizează PyTorch pentru procesarea datelor. Instalați PyTorch și dependențele asociate în funcție de platforma dvs.:

#### Windows (NVidia):
```
pip3 install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu121
```

#### Windows (CPU):
```
pip3 install torch torchvision torchaudio
```
Personal nu dispun de o placă video capabilă nici de ROCm, nici de CUDA, așa că a trebuit să rulez modelul pe procesor. Acest lucru a însemnat că orice prompt primește un răspuns după ore întregi de procesare. Testarea părții AI mi-a fost aproape imposibilă.

#### Linux (AMD ROCm):
```
pip3 install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/rocm6.0
```

### LLama 3:
De asemenea, modelul `meta-llama/Meta-Llama-3-8B-Instruct` trebuie să se afle la locația `~/.cache/huggingface/hub`.

## Scripturi NPM
Pentru a porni serverul de dezvoltare, utilizați următoarea comandă:

```
npm run server
```
Aceasta va porni serverul folosind nodemon, care va reîncărca automat aplicația de fiecare dată când sunt detectate modificări în cod.

## Instrucțiuni de Utilizare
1. Clonați repository-ul proiectului.
2. Instalați dependențele NPM și Python conform instrucțiunilor de mai sus.
3. Configurați fișierul `.env` cu setările necesare pentru aplicația dvs.
4. Rulați scriptul `npm run server` pentru a porni serverul de dezvoltare.
5. Accesați aplicația în browser-ul dvs. la adresa `http://localhost:3000`.
