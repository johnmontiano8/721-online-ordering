const CheckoutSteps = ({ current }: { current: number }) => {
  const steps = ["Cart", "Address", "Payment", "Confirmation"];
  return (
    <div className="flex justify-center mb-6">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              index <= current
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground"
            }`}
          >
            {index + 1}
          </div>
          {index < steps.length - 1 && (
            <div
              className={`h-1 w-12 ${
                index < current ? "bg-primary" : "bg-muted"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default CheckoutSteps;
