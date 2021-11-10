package codebrigade.lms.v1.payload;

import codebrigade.lms.v1.entity.Role;

public class AuthResponse {

    private String accessToken;
    private String tokenType = "Bearer";
    private Role role;


    public String getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }

    public String getTokenType() {
        return tokenType;
    }

    public void setTokenType(String tokenType) {
        this.tokenType = tokenType;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }
}
