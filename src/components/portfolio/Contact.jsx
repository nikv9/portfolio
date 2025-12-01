export default function Contact() {
  return (
    <section id="contact" className="py-6">
      <h3 className="text-xl font-semibold mb-3">Contact</h3>

      <div className="flex items-center gap-2 mb-1 text-sm">
        <span>Email:</span>
        <a
          href="mailto:nikkv9@gmail.com"
          className="text-sm text-blue-600 hover:underline"
        >
          nikkv9@gmail.com
        </a>
      </div>
      <div className="flex items-center gap-2 mb-1 text-sm">
        <span>Phone:</span>
        <a
          href="tel:+917440620260"
          className="text-sm text-blue-600 hover:underline"
        >
          +917440620260
        </a>
      </div>
    </section>
  );
}
