const wizard = {
  name: 'маг',
  health: 90,
};

export default function showLife(health) {
  let result = '';
  if (health > 50) {
    result = 'healthy';
  }
  if ((health >= 15) && (health <= 50)) {
    result = 'wounded';
  }
  if (health < 15) {
    result = 'critical';
  }
  return result;
}

showLife(wizard.health);
