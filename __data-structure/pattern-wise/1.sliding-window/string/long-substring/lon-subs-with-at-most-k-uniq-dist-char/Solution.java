import java.util.HashMap;

public class Solution {

	public static int kDistinctChars(int k, String str) {
		int left = 0;
		int right = 0;
		int max = 0;
		HashMap map = new HashMap<Character, Integer>();

		while (right < str.length()) {
			map.put(str.charAt(right), (int) map.getOrDefault(str.charAt(right), 0) + 1);

			while (map.size() > k) {
				map.put(str.charAt(left), (int) map.get(str.charAt(left)) - 1);
				if ((int) map.get(str.charAt(left)) == 0) {
					map.remove(str.charAt(left));
				}
				left++;
			}
			if (map.size() <= k)
				max = Math.max((right - left + 1), max);
			right++;
		}

		return max;
	}
}
