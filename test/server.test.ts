import { vi, describe, it, expect } from 'vitest';

// 1. Mock the app before importing server
vi.mock('../src/app.js', () => {
  return {
    default: {
      listen: vi.fn((port, cb) => {
        if (cb) cb();
        return { close: vi.fn() };
      }),
    },
  };
});

describe('Server Startup', () => {
  it('should start the server on the default port 5000', async () => {
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

    // Reset modules to ensure server.ts runs fresh if called multiple times
    await import('../src/server.js?update=' + Date.now());

    const { default: app } = await import('../src/app.js');

    // FIX: Check if the first argument matches 5000 (either as string or number)
    const listenArgs = vi.mocked(app.listen).mock.calls[0];
    expect(String(listenArgs?.[0])).toBe("5000");
    expect(listenArgs?.[1]).toBeInstanceOf(Function);

    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('server listening on port 5000'));

    consoleSpy.mockRestore();
  });
});
