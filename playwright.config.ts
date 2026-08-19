export interface DeviceConfig {
  userAgent: string;
  viewport: { width: number; height: number };
  deviceScaleFactor?: number;
  isMobile?: boolean;
  hasTouch?: boolean;
}

export const devicesConfig: Record<string, DeviceConfig> = {
  desktop: {
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    viewport: { width: 1280, height: 800 },
    isMobile: false,
    hasTouch: false,
  },
  mobile: {
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1',
    viewport: { width: 375, height: 812 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
  }
};
