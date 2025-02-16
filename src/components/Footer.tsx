export const Footer = () => {
  return (
    <footer className="bg-slate-900/80 backdrop-blur-sm py-8 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© 2024 AI Enterprise. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-emerald-500">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-emerald-500">Terms</a>
            <a href="#" className="text-gray-400 hover:text-emerald-500">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}; 