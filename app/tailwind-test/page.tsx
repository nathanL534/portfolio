export default function TailwindTest() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="bg-red-500 text-white p-4 rounded-lg shadow-lg max-w-md">
        <p className="text-xl font-bold">
          ✅ Tailwind CSS Test
        </p>
        <p className="mt-2">
          If you can see this bright red card with white text, large bold heading, and proper rounded corners with shadow, then Tailwind CSS is working correctly!
        </p>
        <div className="mt-4 space-y-2">
          <div className="bg-blue-600 p-2 rounded text-sm">Blue background test</div>
          <div className="bg-green-500 p-2 rounded text-sm">Green background test</div>
          <div className="bg-yellow-400 text-black p-2 rounded text-sm">Yellow background test</div>
        </div>
      </div>
    </div>
  );
}
