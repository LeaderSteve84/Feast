package com.example.feast.user;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public class UserUtil {
    public static String getLoggedInUser() {
        Object Principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if(Principal instanceof UserDetails){
            return ((UserDetails)Principal).getUsername();
        } else if(Principal != null){
            return Principal.toString();
        } else {
            throw new UsernameNotFoundException("no user is currently logged in");
        }
    }
}
