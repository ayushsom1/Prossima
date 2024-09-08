export default function ServiceCard({ title, description }) {
    return (
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <p>{description}</p>
      </div>
    )
  }