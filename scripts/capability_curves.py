import matplotlib.pyplot as plt
import numpy as np

plt.style.use('seaborn-v0_8-whitegrid')
fig, axes = plt.subplots(1, 3, figsize=(16, 5))

t = np.linspace(0, 5, 200)

# Colors
blue = '#1f77b4'
orange = '#ff7f0e'
red = '#d62728'

# --- Panel 1: Pre-AI ---
ax = axes[0]
ax.set_title('1) Pre-AI', fontsize=16, fontweight='bold', pad=12)
y = np.exp(0.4 * t)
ax.plot(t, y, color=blue, linewidth=2.5, label='Tech Company')
ax.set_xlabel('Time', fontsize=12)
ax.set_ylabel('Capability', fontsize=12)
ax.legend(fontsize=10, loc='upper left')
ax.set_xlim(0, 5)

# --- Panel 2: Early LLMs ---
ax = axes[1]
ax.set_title('2) Early LLMs', fontsize=16, fontweight='bold', pad=12)
y_a = np.exp(0.6 * t)
y_b = np.exp(0.9 * t)
ax.plot(t, y_a, color=blue, linewidth=2.5, label='Tech Company')
ax.plot(t, y_b, color=orange, linewidth=2.5, label='AI Company')
ax.set_xlabel('Time', fontsize=12)
ax.set_ylabel('Capability', fontsize=12)
ax.legend(fontsize=10, loc='upper left')
ax.set_xlim(0, 5)

# --- Panel 3: Opus 4.5+ ---
ax = axes[2]
ax.set_title('3) Opus 4.5+', fontsize=16, fontweight='bold', pad=12)
y_a = np.exp(0.7 * t)
y_b = np.exp(1.1 * t)
y_c = np.exp(1.4 * t)
ax.plot(t, y_a, color=blue, linewidth=2.5, label='Tech Company')
ax.plot(t, y_b, color=orange, linewidth=2.5, label='AI Company')
ax.plot(t, y_c, color=red, linewidth=2.5, label='Opus 4.5+ Company')
ax.set_xlabel('Time', fontsize=12)
ax.set_ylabel('Capability', fontsize=12)
ax.legend(fontsize=10, loc='upper left')
ax.set_xlim(0, 5)

plt.tight_layout(w_pad=3)
out_path = 'public/blog/opus-renaissance/capability-curves.png'
fig.savefig(out_path, dpi=150, bbox_inches='tight', facecolor='white')
print(f'Saved to {out_path}')
plt.close()
