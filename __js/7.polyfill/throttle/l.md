With leading throttling: The first resize event handler runs immediately, then ignores events for 200ms
With trailing throttling: It waits 200ms after the last resize event before running the handler

Let's analyze the exact sequence for leading throttle (leading: true, trailing: false) with a 10ms throttle period:

### Events Timeline

- A: 0ms
- B: 7ms
- C: 12ms
- D: 22ms
- E: 25ms
- F: 45ms

### Leading Throttle (leading: true, trailing: false)

1. **Event A (0ms)**:

   - ✓ EXECUTES immediately (leading is true)
   - Starts 10ms throttle period (0ms to 10ms)
   - During this period, all events will be ignored

2. **Event B (7ms)**:

   - ✗ IGNORED (falls within the throttle period started by A)
   - No execution occurs

3. **Event C (12ms)**:

   - First throttle period has ended (it ended at 10ms)
   - ✓ EXECUTES immediately
   - Starts a new 10ms throttle period (12ms to 22ms)

4. **Event D (22ms)**:

   - The throttle period from C has just ended
   - ✓ EXECUTES immediately
   - Starts a new 10ms throttle period (22ms to 32ms)

5. **Event E (25ms)**:

   - ✗ IGNORED (falls within the throttle period started by D)
   - No execution occurs

6. **Event F (45ms)**:
   - Well after the last throttle period has ended
   - ✓ EXECUTES immediately
   - Starts a new 10ms throttle period (45ms to 55ms)

**Final execution sequence: A, C, D, F**

With leading throttle, the key pattern is that the first event of each "group" executes immediately, and then all subsequent events within the throttle period are completely ignored. No execution happens at the end of the period (trailing is false).
