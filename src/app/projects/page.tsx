export default function Projects() {
    const projects = [
      {
        title: 'AI Invoice & GL Extractor',
        tech: 'Gemini, PostgreSQL',
        desc: 'Built an LLM-powered invoice parser and financial data extractor.'
      },
      {
        title: 'SageMaker Deployment Automation',
        tech: 'AWS CDK, Step Functions',
        desc: 'Built a rollback-ready MLOps pipeline for SageMaker model deployment.'
      },
      {
        title: 'Chat with PDF App',
        tech: 'LangChain, ChromaDB',
        desc: 'Developed a frontend for querying documents with vector embeddings.'
      }
    ];
  
    return (
      <div className="min-h-screen bg-white p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">Projects</h1>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((proj, idx) => (
            <div key={idx} className="border-l-4 border-blue-600 bg-gray-50 p-4 shadow rounded">
              <h2 className="text-xl font-semibold">{proj.title}</h2>
              <p className="text-sm text-gray-500 mb-2">{proj.tech}</p>
              <p>{proj.desc}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }