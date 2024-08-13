import UAsync from "@/hooks/useAsync"
import Debounce from "@/hooks/useDebounce"
import { HasFocus } from "@/hooks/useHasFocus/HasFocus"
import Idle from "@/hooks/useIdle"
import { LockedBody } from "@/hooks/useLockedBody/LockedBody"
import OnScreen from "@/hooks/useOnScreen/OnScreen"
import Counter from "@/hooks/usePrevious"
import Responsive from "@/hooks/useResponsive/Responsive"
import DidUpdate from "@/hooks/useWhyDidYouUpdate/DidUpdate"

const Page =()=>{

    return<>
    {/* <Debounce/> */}
    {/* <Responsive/> */}
    {/* <OnScreen/> */}
    {/* <HasFocus/> */}
    <LockedBody/>
    {/* <DidUpdate/> */}
    {/* <UAsync/> */}
    {/* <Idle/> */}
    {/* <Counter/> */}
    </>
}

export  default Page