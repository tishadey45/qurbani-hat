export default function Footer() {
  return (
    <footer className="bg-green-950 text-white p-10">
      <div className="footer sm:footer-horizontal">
        <nav>
          <h6 className="footer-title">Contact Info</h6>
          <p>Email: support@qurbanihat.com</p>
          <p>Phone: +880 1234-567890</p>
          <p>Address: Barishal, Bangladesh</p>
        </nav>

        <nav>
          <h6 className="footer-title">Social Links</h6>
          <a className="flex items-center gap-2 link link-hover">Facebook</a>
          <a className="flex items-center gap-2 link link-hover">Twitter</a>
          <a className="flex items-center gap-2 link link-hover">Instagram</a>
          <a className="flex items-center gap-2 link link-hover">LinkedIn</a>
        </nav>

        <nav>
          <h6 className="footer-title">About</h6>
          <p className="max-w-xs">
            QurbaniHat is an online marketplace where you can easily buy and
            sell qurbani animals.
          </p>
        </nav>
      </div>
      <div className="w-full text-center mt-6 border-t border-gray-600 pt-4">
        <p>© {new Date().getFullYear()} QurbaniHat. All rights reserved.</p>
      </div>
    </footer>
  );
}
