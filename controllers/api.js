const { spawn } = require('child_process');

const handleFormSubmit = (req, res) => {
  const process = spawn('python', ['/offer.py', JSON.stringify(req.body)]);

  let timeout; const timeoutMs = 30_000; // 30 seconds

  process.stdout.on('data', (data) => {
    clearTimeout(timeout);
    req.session.offer = data.toString();
    res.redirect('/offer');
  });

  process.stderr.on('data', (data) => {
    clearTimeout(timeout);
    req.session.offer = "A avut loc o eroare de server";
    res.redirect('/offer');
  });

  timeout = setTimeout(() => {
    process.kill();
    req.session.offer = { error: 'Timeout error' };
    res.redirect('/offer');
  }, timeoutMs);
};

module.exports = {
  handleFormSubmit,
};