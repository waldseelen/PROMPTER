export default function Toast({ msg, type }) {
    return (
        <div className={`toast`} role="alert" aria-live="polite" style={type === 'warn' ? { borderColor: 'rgba(245,158,11,0.5)' } : {}}>
            {msg}
        </div>
    );
}
