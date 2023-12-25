import PropTypes from 'prop-types';
import ButtonSubmit from './ButtonSubmit';

export default function Form({
  children,
  submitLabel,
  className,
  onSubmit,
  method,
  action,
}) {
  return (
    <form
      className={`capitalize ${className}`}
      onSubmit={onSubmit}
      method={method}
      action={action}
    >
      <div className="space-y-4">
        {/* <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2"> */}
        {children}
      </div>

      <div className="mt-6">
        <ButtonSubmit text={submitLabel} />
      </div>
    </form>
  );
}

Form.propTypes = {
  children: PropTypes.node,
  submitLabel: PropTypes.string,
  className: PropTypes.string,
  onSubmit: PropTypes.func,
  method: PropTypes.string,
  action: PropTypes.string,
};