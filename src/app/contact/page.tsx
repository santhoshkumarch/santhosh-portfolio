export default function Contact() {
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">Contact</h1>
        <div className="bg-white shadow p-6 rounded max-w-xl">
          <p className="mb-2"><strong>Email:</strong> santhoshkumar90@hotmail.com</p>
          <p className="mb-2"><strong>Phone:</strong> +91 7904175862</p>
          <p className="mb-2"><strong>GitHub:</strong> <a href="https://github.com/santhosh-code" className="text-blue-600 hover:underline">github.com/santhosh-code</a></p>
          <p className="text-sm text-gray-500 mt-4">Feel free to reach out for freelance projects or collaborations.</p>
        </div>
      </div>
    );
  }