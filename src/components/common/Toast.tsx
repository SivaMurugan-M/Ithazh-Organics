import React from 'react';
import { CheckCircle2, Info, AlertCircle, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const Toast: React.FC = () => {
  const { toasts, removeToast } = useCart();

  if (toasts.length === 0) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 10000,
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        maxWidth: '380px',
        width: 'calc(100% - 48px)',
        pointerEvents: 'none'
      }}
    >
      {toasts.map((toast) => {
        let icon = <CheckCircle2 size={18} color="#063E27" />;
        let borderLeftColor = 'var(--color-primary-green)';

        if (toast.type === 'info') {
          icon = <Info size={18} color="#BA8E2B" />;
          borderLeftColor = 'var(--color-gold)';
        } else if (toast.type === 'warning') {
          icon = <AlertCircle size={18} color="#A65353" />;
          borderLeftColor = '#A65353';
        }

        return (
          <div
            key={toast.id}
            style={{
              pointerEvents: 'auto',
              backgroundColor: '#FFFFFF',
              color: 'var(--color-dark-green)',
              borderRadius: '12px',
              padding: '0.85rem 1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              boxShadow: '0 10px 28px rgba(6, 62, 39, 0.18)',
              borderLeft: `4px solid ${borderLeftColor}`,
              borderTop: '1px solid #ECE3D0',
              borderRight: '1px solid #ECE3D0',
              borderBottom: '1px solid #ECE3D0',
              animation: 'fadeInUp 0.3s ease forwards',
              fontSize: '0.88rem',
              fontWeight: 600,
              lineHeight: 1.4
            }}
          >
            <div style={{ flexShrink: 0 }}>{icon}</div>
            <div style={{ flex: 1 }}>{toast.message}</div>
            <button
              onClick={() => removeToast(toast.id)}
              aria-label="Close notification"
              style={{
                color: 'var(--color-text-muted)',
                padding: '2px',
                display: 'flex'
              }}
            >
              <X size={15} />
            </button>
          </div>
        );
      })}
    </div>
  );
};
