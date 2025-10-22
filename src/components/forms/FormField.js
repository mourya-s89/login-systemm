import Input from './Input';

export default function FormField({
  label,
  error,
  required = false,
  children,
  ...inputProps
}) {
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      {children || <Input error={!!error} {...inputProps} />}
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}