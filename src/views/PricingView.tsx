import { useState, useMemo, FormEvent } from 'react';
import { Calculator, CheckCircle2, Phone, DollarSign, MessageSquare, ShieldCheck, Info, FileText } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

interface PricingItem {
  name: string;
  category: string;
  unit: string;
  price: number;
  description: string;
}

const PRICING_LIST: PricingItem[] = [
  { name: "Standard Diagnostic & Visitation", category: "General", unit: "per visit", price: 149, description: "Detailed fault-finding and safety checks. Waived if you choose to proceed with our repair service." },
  { name: "Emergency Dispatch Post-10 PM", category: "General", unit: "per incident", price: 249, description: "Rapid 24/7 night-time dispatch within 30-45 mins with safety gear." },
  { name: "Ceiling Fan Installation / Hooking", category: "Fittings", unit: "per fan", price: 149, description: "Secure structural hooking, blade alignment, and noise-free balancing." },
  { name: "Exhaust Fan Installation", category: "Fittings", unit: "per fan", price: 199, description: "Precision sizing, wall venting, and vibration insulation." },
  { name: "Modular Switch / Socket Replacement", category: "Fittings", unit: "per piece", price: 99, description: "Replacement of broken, sparking switches with premium ISI-grade parts." },
  { name: "Complete Modular Switchboard (6-12 Module)", category: "Fittings", unit: "per board", price: 299, description: "Assembly, routing, labeling, and mounting of standard modular board." },
  { name: "Miniature Circuit Breaker (MCB) Upgrade", category: "Safety & DB", unit: "per pole", price: 199, description: "Installation of rapid magnetic-thermal overload protection switch." },
  { name: "RCCB / ELCB Shock Protection System", category: "Safety & DB", unit: "per unit", price: 899, description: "Sensitive leakage breaker setup to block fatal electric shocks." },
  { name: "Complete Distribution Board (DB) Wiring", category: "Safety & DB", unit: "per DB", price: 1499, description: "Phase balancing, clean cable dress, busbar insulation, and line diagnostics." },
  { name: "AC Point Installation (with heavy wiring)", category: "Wiring & Power", unit: "per point", price: 699, description: "Dedicated 4.0mm FR copper wire directly routed to DB, with heavy-load 25A starter/socket." },
  { name: "Geyser / Water Heater Power Point", category: "Wiring & Power", unit: "per point", price: 499, description: "Dedicated 2.5mm copper circuit with robust safety insulation." },
  { name: "Decorative Lighting & Chandelier Assembly", category: "Fittings", unit: "per fixture", price: 499, description: "Delicate glass handling, perfect leveling, and aesthetic dimmer setup." },
  { name: "LED Strip & Profile Diffuser Setting", category: "Fittings", unit: "per meter", price: 99, description: "Concealed profile channeling, clean joints, and driver power setup." },
  { name: "Inverter Commissioning & Bypass Setup", category: "Backup Power", unit: "per setup", price: 399, description: "Mounting, configuring active line bypass, battery charging loop, and tests." },
  { name: "Battery Acid Top-Up & Terminal De-scaling", category: "Backup Power", unit: "per battery", price: 149, description: "Distilled water top-up, lead sulfur cleaning, and petroleum jelly seal." },
  { name: "Concealed House Wiring (Labor Rate)", category: "Wiring & Power", unit: "per sq.ft.", price: 9, description: "PVC conduit wall grooving, wire pulling, and safety checks (materials excluded)." }
];

export default function PricingView() {
  const [calculatorInputs, setCalculatorInputs] = useState<Record<string, number>>({});
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerArea, setCustomerArea] = useState('Vesu');

  // Handle calculator input changes
  const handleInputChange = (itemName: string, value: string) => {
    const parsed = parseInt(value, 10);
    setCalculatorInputs(prev => ({
      ...prev,
      [itemName]: isNaN(parsed) || parsed < 0 ? 0 : parsed
    }));
  };

  // Calculate dynamic quote total
  const calculatedResult = useMemo(() => {
    let subtotal = 0;
    const selectedItems: Array<{ name: string; qty: number; cost: number }> = [];

    PRICING_LIST.forEach(item => {
      const qty = calculatorInputs[item.name] || 0;
      if (qty > 0) {
        const cost = qty * item.price;
        subtotal += cost;
        selectedItems.push({ name: item.name, qty, cost });
      }
    });

    // Add visiting/diagnostic fee if total is greater than 0 but less than ₹500
    const includesVisiting = subtotal > 0 && subtotal < 500;
    const visitingFee = includesVisiting ? 149 : 0;
    const total = subtotal + visitingFee;

    return { selectedItems, subtotal, visitingFee, total };
  }, [calculatorInputs]);

  // Construct WhatsApp checkout text
  const handleWhatsAppQuote = () => {
    const { selectedItems, total, visitingFee } = calculatedResult;
    if (selectedItems.length === 0) {
      alert("Please select at least one item from the cost estimator first.");
      return;
    }

    let message = `*Hari Electrician Cost Estimate Request*\n`;
    message += `Customer: ${customerName || 'Resident'}\n`;
    message += `Area: ${customerArea}\n`;
    if (customerPhone) message += `Phone: ${customerPhone}\n`;
    message += `\n*Breakdown:*\n`;
    selectedItems.forEach(item => {
      message += `- ${item.name} x${item.qty}: ₹${item.cost}\n`;
    });
    if (visitingFee > 0) {
      message += `- Diagnostic/Visiting Fee: ₹${visitingFee}\n`;
    }
    message += `\n*Estimated Total: ₹${total}*\n`;
    message += `_Please confirm my booking slots and technicians._`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/917897954795?text=${encoded}`, '_blank');
  };

  const handleInquirySubmit = (e: FormEvent) => {
    e.preventDefault();
    if (calculatedResult.selectedItems.length === 0) {
      alert("Please select at least one item from the cost estimator first.");
      return;
    }
    setInquirySubmitted(true);
    setTimeout(() => {
      setInquirySubmitted(false);
      setCalculatorInputs({});
      setCustomerName('');
      setCustomerPhone('');
    }, 4000);
  };

  return (
    <div id="pricing-view" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16 animate-fade-in">
      
      {/* Dynamic Header / SEO Booster */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
          Transparent Rates
        </span>
        <h1 className="font-display font-black text-3xl md:text-5xl text-dark">
          Electrician Charges & Cost Estimator in Surat
        </h1>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
          No hidden fees, no guess work. Browse our standard price list below or use our interactive **Electrical Cost Estimator** to calculate instant pricing budgets for your home in Vesu, Piplod, and City Light.
        </p>
      </div>

      {/* Grid: Price List Table + Cost Estimator Tool */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Cost Estimator Card */}
        <div className="lg:col-span-5 bg-[#003769] text-white rounded-3xl p-6 md:p-8 shadow-xl space-y-6 sticky top-24">
          <div className="flex items-center gap-3 border-b border-white/10 pb-4">
            <Calculator className="w-6 h-6 text-secondary" />
            <div>
              <h2 className="font-display font-bold text-xl text-white">Cost Estimator</h2>
              <p className="text-xs text-gray-300">Build your custom service budget in seconds</p>
            </div>
          </div>

          <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
            {PRICING_LIST.map((item) => (
              <div key={item.name} className="flex items-center justify-between gap-4 py-2 border-b border-white/5">
                <div className="text-sm">
                  <p className="font-bold text-gray-100">{item.name}</p>
                  <p className="text-xs text-gray-400">₹{item.price} / {item.unit}</p>
                </div>
                <input
                  type="number"
                  min="0"
                  placeholder="0"
                  value={calculatorInputs[item.name] || ''}
                  onChange={(e) => handleInputChange(item.name, e.target.value)}
                  className="w-16 h-9 rounded-lg bg-white/10 border border-white/20 text-center font-bold text-white focus:outline-none focus:border-secondary"
                />
              </div>
            ))}
          </div>

          {/* Calculator Output invoice summary */}
          <div className="bg-white/5 rounded-2xl p-5 space-y-3.5 border border-white/10">
            <h3 className="text-xs font-bold uppercase tracking-wider text-secondary">Estimated Invoice</h3>
            
            {calculatedResult.selectedItems.length === 0 ? (
              <p className="text-xs text-gray-400 italic">No items selected yet. Adjust the quantities above to estimate costs.</p>
            ) : (
              <div className="space-y-2 text-xs">
                {calculatedResult.selectedItems.map(item => (
                  <div key={item.name} className="flex justify-between text-gray-300">
                    <span className="truncate max-w-[200px]">{item.name} (x{item.qty})</span>
                    <span className="font-mono">₹{item.cost}</span>
                  </div>
                ))}
                {calculatedResult.visitingFee > 0 && (
                  <div className="flex justify-between text-gray-300 border-t border-white/5 pt-2">
                    <span>Diagnostic & Visitation Fee</span>
                    <span className="font-mono">+ ₹{calculatedResult.visitingFee}</span>
                  </div>
                )}
                <div className="flex justify-between text-base font-bold text-white border-t border-white/10 pt-2.5">
                  <span>Grand Total</span>
                  <span className="text-secondary font-mono text-lg">₹{calculatedResult.total}</span>
                </div>
              </div>
            )}
          </div>

          {/* Form to submit/WhatsApp */}
          {calculatedResult.selectedItems.length > 0 && (
            <form onSubmit={handleInquirySubmit} className="space-y-4 pt-2">
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full h-10 px-3 rounded-lg bg-white text-dark text-xs font-semibold focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full h-10 px-3 rounded-lg bg-white text-dark text-xs font-mono focus:outline-none"
                />
              </div>

              <select
                value={customerArea}
                onChange={(e) => setCustomerArea(e.target.value)}
                className="w-full h-10 px-3 rounded-lg bg-white text-dark text-xs font-bold focus:outline-none"
              >
                <option value="Vesu">Vesu (Serviced within 15-20 min)</option>
                <option value="Piplod">Piplod (Serviced within 25-30 min)</option>
                <option value="City Light">City Light (Serviced within 20 min)</option>
                <option value="Pal">Pal</option>
                <option value="Althan">Althan</option>
                <option value="Adajan">Adajan</option>
              </select>

              {inquirySubmitted ? (
                <div className="bg-green-500/10 border border-green-500 text-green-300 text-xs font-bold rounded-xl p-3 text-center flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  Inquiry sent! Hari will call you back in 15 mins.
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="submit"
                    className="w-full h-11 bg-secondary hover:bg-secondary/90 text-dark font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 transition-all shadow-md"
                  >
                    <FileText className="w-4 h-4" /> Book Consultation
                  </button>
                  <button
                    type="button"
                    onClick={handleWhatsAppQuote}
                    className="w-full h-11 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 transition-all shadow-md"
                  >
                    <MessageSquare className="w-4 h-4" /> WhatsApp Estimate
                  </button>
                </div>
              )}
            </form>
          )}

          {/* Service Guarantee badge */}
          <div className="border-t border-white/5 pt-4 flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-secondary shrink-0" />
            <p className="text-xs text-gray-300 leading-relaxed">
              **Our Fair Rate Promise**: If we do not solve your problem, you pay ₹0. Standard warranties cover all repair parts for 90 days.
            </p>
          </div>
        </div>

        {/* Right Column: Standard Transparent Rate Card Table */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white rounded-3xl border border-gray-100 shadow-xs overflow-hidden">
            <div className="p-6 bg-gray-50 border-b border-gray-100 flex items-center justify-between">
              <div>
                <h2 className="font-display font-extrabold text-xl text-dark">Standard Service Rate Card</h2>
                <p className="text-xs text-gray-500 mt-0.5">Approved pricing checklist for Surat citizens</p>
              </div>
              <span className="text-[10px] bg-primary/10 text-primary font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                Updated: June 2026
              </span>
            </div>

            <div className="divide-y divide-gray-100 overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50/50 text-xs font-bold text-gray-400 uppercase tracking-wider">
                    <th className="px-6 py-4">Electrical Service</th>
                    <th className="px-6 py-4">Standard Rate</th>
                    <th className="px-6 py-4">Unit Scope</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm">
                  {PRICING_LIST.map((srv) => (
                    <tr key={srv.name} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4.5 space-y-0.5">
                        <p className="font-bold text-dark">{srv.name}</p>
                        <p className="text-xs text-gray-500 line-clamp-1">{srv.description}</p>
                      </td>
                      <td className="px-6 py-4.5 font-mono font-bold text-primary">
                        ₹{srv.price}
                      </td>
                      <td className="px-6 py-4.5 text-xs text-gray-500 font-medium capitalize">
                        {srv.unit}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pricing FAQ notice panels */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 flex items-start gap-3">
              <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-gray-900">Are material costs included?</p>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                  No, rate quotes listed above are labor service charges. We use genuine premium spare parts (Finolex, Polycab, Anchor, L&T). You can purchase parts yourself or authorize us to supply them with official GST retail bills.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 flex items-start gap-3">
              <Phone className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-gray-900">Have a custom or high-volume project?</p>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                  For complex multi-family flat renovations, full warehouse conduits, commercial shop retrofitting, or office electrical overhauls, call us directly to schedule a completely free on-site survey and premium custom estimates.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
