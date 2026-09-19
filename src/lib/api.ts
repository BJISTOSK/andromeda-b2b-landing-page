/**
 * Andromeda B2B - Client API Interface
 * Handles client-side telemetry and startup pitch data contracts.
 * Communicates with the external private backend endpoint.
 */

export interface StartupPitchInput {
  companyName: string;
  founderName: string;
  email: string;
  pitchSummary: string;
  deckUrl: string;
  stage: string;
  marketCategory: string;
  fundingAsk: string;
}

export interface BosTelemetry {
  metrics: Array<{
    key: string;
    label: string;
    value: string;
    change: string;
    trend: 'up' | 'down' | 'stable';
  }>;
  operations: Array<{
    title: string;
    domain: string;
    status: 'healthy' | 'active' | 'warning' | 'idle';
    latencyMs: number;
    throughput: string;
    instances: number;
    lastSync: string;
  }>;
  tasks: Array<{
    title: string;
    priority: 'critical' | 'high' | 'medium' | 'low';
    status: 'pending' | 'in_progress' | 'completed';
    role: string;
  }>;
}

// Client fallback telemetry data for edge rendering
export const DEFAULT_BOS_TELEMETRY: BosTelemetry = {
  metrics: [
    {
      key: "ecosystem_volume",
      label: "B2B Ecosystem Volume",
      value: "$248.6M",
      change: "+28.4%",
      trend: "up",
    },
    {
      key: "active_partners",
      label: "Active Enterprise Partners",
      value: "1,420+",
      change: "+14.2%",
      trend: "up",
    },
    {
      key: "api_throughput",
      label: "BOS Gateway Throughput",
      value: "98.4k req/s",
      change: "+6.1%",
      trend: "up",
    },
    {
      key: "uptime_sla",
      label: "Enterprise SLA Uptime",
      value: "99.995%",
      change: "0.0%",
      trend: "stable",
    },
  ],
  operations: [
    {
      title: "Core Orchestration Gateway",
      domain: "Orchestration",
      status: "healthy",
      latencyMs: 9,
      throughput: "42.8k req/s",
      instances: 16,
      lastSync: "Just now",
    },
    {
      title: "B2B Liquidity & Settlements",
      domain: "Settlements",
      status: "active",
      latencyMs: 14,
      throughput: "18.2k req/s",
      instances: 12,
      lastSync: "2 mins ago",
    },
    {
      title: "Enterprise Identity & IAM Mesh",
      domain: "Security",
      status: "healthy",
      latencyMs: 6,
      throughput: "36.4k req/s",
      instances: 8,
      lastSync: "Just now",
    },
    {
      title: "Real-time Telemetry & Data Lake",
      domain: "Analytics",
      status: "active",
      latencyMs: 11,
      throughput: "75.1k req/s",
      instances: 24,
      lastSync: "1 min ago",
    },
  ],
  tasks: [
    {
      title: "Execute Q3 Automated Liquidity Rebalance",
      priority: "high",
      status: "in_progress",
      role: "Settlement Engine",
    },
    {
      title: "Provision Multi-Region Node Failover for EU-West",
      priority: "critical",
      status: "completed",
      role: "Infra Orchestrator",
    },
    {
      title: "Sync Enterprise ERP Connectors (SAP & Oracle)",
      priority: "medium",
      status: "pending",
      role: "Integration Fabric",
    },
  ],
};
