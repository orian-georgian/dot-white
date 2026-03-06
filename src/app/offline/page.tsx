export default function OfflinePage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-semibold">You are offline</h1>
        <p className="text-muted-foreground">
          Please check your internet connection and try again.
        </p>
      </div>
    </main>
  );
}
