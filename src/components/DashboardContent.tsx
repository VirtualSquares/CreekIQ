import { useEffect, useRef, useState } from "react";

function DashboardContent() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [facingMode, setFacingMode] = useState<"user" | "environment">("environment");
  const [error, setError] = useState<string | null>(null);
  const [photo, setPhoto] = useState<string | null>(null);

  useEffect(() => {
    setError(null);
    setPhoto(null);
    const constraints = {
      audio: false,
      video: { facingMode },
    };

    async function startCamera() {
      if (videoRef.current) {
        try {
          const stream = await navigator.mediaDevices.getUserMedia(constraints);
          videoRef.current.srcObject = stream;
          await videoRef.current.play();
        } catch {
          setError("Unable to access camera. Please allow camera permissions.");
        }
      }
    }

    startCamera();

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach((track) => track.stop());
        videoRef.current.srcObject = null;
      }
    };
  }, [facingMode]);

  const toggleFacingMode = () => {
    setFacingMode((prev) => (prev === "user" ? "environment" : "user"));
  };

  const takePhoto = () => {
    if (!videoRef.current || !canvasRef.current) return;
    const video = videoRef.current;
    const canvas = canvasRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const dataUrl = canvas.toDataURL("image/png");
    setPhoto(dataUrl);
  };

  const analyzePhoto = async () => {
    if (!photo) return;
    try {
      const response = await fetch("http://localhost:5000/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ image: photo }),
      });
      const result = await response.json();
      if (!response.ok) {
        alert("Error: " + result.error);
      } else {
        alert(`Analysis complete: ${JSON.stringify(result)}`);
      }
    } catch (err) {
      alert("Failed to analyze photo: " + err);
    }
  };

  return (
    <div className="min-h-screen bg-[#0e0e0e] flex flex-col items-center justify-center p-6">
      <h1 className="text-white text-4xl font-bold mb-8 gradient-custom-text">
        CreekIQ Camera
      </h1>

      <div className="relative w-full max-w-3xl aspect-video rounded-xl overflow-hidden shadow-2xl border border-fuchsia-600/50">
        <video
          ref={videoRef}
          className="w-full h-full object-cover bg-black"
          playsInline
          muted
        />
        {error && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 text-red-400 text-center p-4">
            {error}
          </div>
        )}
      </div>

      <div className="flex gap-4 mt-6">
        <button
          onClick={toggleFacingMode}
          className="px-6 py-3 rounded-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold shadow-lg shadow-fuchsia-800/50 transition"
          aria-label="Switch Camera"
        >
          Switch to {facingMode === "user" ? "Back" : "Front"} Camera
        </button>

        <button
          onClick={takePhoto}
          className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg shadow-blue-800/50 transition"
          aria-label="Take Photo"
        >
          Take Photo
        </button>
      </div>

      {photo && (
        <>
          <div className="mt-8 max-w-3xl w-full rounded-xl overflow-hidden shadow-2xl border border-fuchsia-600/50">
            <img
              src={photo}
              alt="Captured"
              className="w-full object-contain"
              draggable={false}
            />
          </div>

          <button
            onClick={analyzePhoto}
            className="mt-6 px-8 py-3 rounded-full bg-green-600 hover:bg-green-700 text-white font-semibold shadow-lg shadow-green-800/50 transition"
            aria-label="Analyze Photo"
          >
            Analyze
          </button>
        </>
      )}

      <canvas ref={canvasRef} className="hidden" />
    </div>
  );
}

export default DashboardContent;
