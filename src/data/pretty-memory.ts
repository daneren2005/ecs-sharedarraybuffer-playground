import prettyBytes from 'pretty-bytes';

interface MemoryUsage {
	currentUsed: number;
	totalAllocated: number;
}

const options = {
	binary: true,
	minimumFractionDigits: 1,
	maximumFractionDigits: 1
} as const;

export default function prettyMemory(heap: MemoryUsage): string {
	return `${prettyBytes(heap.currentUsed, options)} / ${prettyBytes(heap.totalAllocated, options)}`;
}
