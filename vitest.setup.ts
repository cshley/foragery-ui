import { expect } from 'vitest';
import { vi } from 'vitest';
import * as matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);
HTMLCanvasElement.prototype.getContext = vi.fn();
