"use client";

/**
 * Premium Animated Background Component - SIMPLIFIED
 */

type BackgroundVariant = "ribbons" | "waves" | "aurora";

interface AnimatedBackgroundProps {
  variant?: BackgroundVariant;
  intensity?: "subtle" | "medium" | "high";
}

export default function AnimatedBackground({
  variant = "ribbons",
  intensity = "medium"
}: AnimatedBackgroundProps) {

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{
        zIndex: 0,
        pointerEvents: 'none'
      }}
    >
      {variant === "ribbons" && <FlowingRibbons intensity={intensity} />}
      {variant === "waves" && <GradientWaves intensity={intensity} />}
      {variant === "aurora" && <FinancialAurora intensity={intensity} />}
    </div>
  );
}

/**
 * STYLE 1: Flowing Ribbons
 */
function FlowingRibbons({ intensity }: { intensity: string }) {
  return (
    <div className="" style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'linear-gradient(135deg, #fce7f3 0%, #dbeafe 50%, #f3e8ff 100%)',
      opacity: 0.7
    }}>
      {/* Large visible pink blob - top left */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          left: '-10%',
          width: '60%',
          height: '60%',
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, rgba(236, 72, 153, 0.1) 70%, transparent 100%)',
          filter: 'blur(80px)',
          animation: 'ribbonFloat1 20s ease-in-out infinite',
        }}
      />

      {/* Large visible cyan blob - top right */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-10%',
          width: '60%',
          height: '60%',
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, rgba(6, 182, 212, 0.1) 70%, transparent 100%)',
          filter: 'blur(80px)',
          animation: 'ribbonFloat2 25s ease-in-out infinite',
          animationDelay: '-5s',
        }}
      />

      {/* Large visible purple blob - center */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '30%',
          width: '50%',
          height: '50%',
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, rgba(168, 85, 247, 0.1) 70%, transparent 100%)',
          filter: 'blur(90px)',
          animation: 'ribbonFloat3 30s ease-in-out infinite',
          animationDelay: '-10s',
        }}
      />

      {/* Large visible gold blob - bottom */}
      <div
        style={{
          position: 'absolute',
          bottom: '-10%',
          left: '20%',
          width: '50%',
          height: '50%',
          background: 'radial-gradient(circle, rgba(251, 191, 36, 0.4) 0%, rgba(251, 191, 36, 0.1) 70%, transparent 100%)',
          filter: 'blur(70px)',
          animation: 'ribbonFloat4 28s ease-in-out infinite',
          animationDelay: '-15s',
        }}
      />

      {/* Large visible emerald blob - bottom right */}
      <div
        style={{
          position: 'absolute',
          bottom: '-10%',
          right: '-10%',
          width: '60%',
          height: '60%',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.4) 0%, rgba(16, 185, 129, 0.1) 70%, transparent 100%)',
          filter: 'blur(75px)',
          animation: 'ribbonFloat5 26s ease-in-out infinite',
          animationDelay: '-20s',
        }}
      />
    </div>
  );
}

/**
 * STYLE 2: Gradient Waves
 */
function GradientWaves({ intensity }: { intensity: string }) {
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'linear-gradient(to bottom, #f8fafc 0%, #e8f5f0 100%)',
      opacity: 0.8
    }}>
      {/* Wave 1 - Emerald */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(120deg, transparent 20%, rgba(16, 185, 129, 0.25) 50%, transparent 80%)',
          animation: 'waveMove1 18s ease-in-out infinite',
        }}
      />

      {/* Wave 2 - Cyan */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(240deg, transparent 30%, rgba(6, 182, 212, 0.3) 55%, transparent 75%)',
          animation: 'waveMove2 15s ease-in-out infinite',
          animationDelay: '-5s',
        }}
      />

      {/* Wave 3 - Gold */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(60deg, transparent 25%, rgba(251, 191, 36, 0.2) 60%, transparent 85%)',
          animation: 'waveMove3 20s ease-in-out infinite',
          animationDelay: '-10s',
        }}
      />
    </div>
  );
}

/**
 * STYLE 3: Financial Aurora
 */
function FinancialAurora({ intensity }: { intensity: string }) {
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'linear-gradient(135deg, #f9fafb 0%, #f0fdf4 100%)',
      opacity: 0.75
    }}>
      {/* Aurora 1 - Emerald */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(ellipse at 20% 30%, rgba(16, 185, 129, 0.3) 0%, transparent 50%)',
          filter: 'blur(80px)',
          animation: 'auroraFloat1 20s ease-in-out infinite',
        }}
      />

      {/* Aurora 2 - Gold */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(ellipse at 80% 20%, rgba(251, 191, 36, 0.25) 0%, transparent 45%)',
          filter: 'blur(70px)',
          animation: 'auroraFloat2 25s ease-in-out infinite',
          animationDelay: '-8s',
        }}
      />

      {/* Aurora 3 - Teal */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          width: '100%',
          height: '100%',
          background: 'radial-gradient(ellipse at 50% 80%, rgba(20, 184, 166, 0.28) 0%, transparent 50%)',
          filter: 'blur(90px)',
          animation: 'auroraFloat3 22s ease-in-out infinite',
          animationDelay: '-15s',
        }}
      />
    </div>
  );
}
